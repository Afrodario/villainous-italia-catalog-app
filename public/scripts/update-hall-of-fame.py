#!/usr/bin/env python3
"""
Rigenera players.json e tournaments.json a partire dall'Excel della Hall of Fame.

Uso:
    python scripts/update-hall-of-fame.py "CAMPIONI NAZIONALI DI DISNEY VILLAINOUS.xlsx"

Dipendenza:
    pip install openpyxl
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import unicodedata
from pathlib import Path
from typing import Any

from openpyxl import load_workbook


SHEET_NAME = "Foglio1"
FIRST_PLAYER_ROW = 2
PLAYER_NAME_COLUMN = 1       # A
FIRST_TOURNAMENT_COLUMN = 8  # H

# I risultati speciali devono essere descritti esplicitamente qui.
# La chiave deve corrispondere esattamente all'intestazione della colonna Excel.
SPECIAL_RESULTS: dict[str, list[dict[str, Any]]] = {
    "BAD TO THE BONE TOUR ROMA NATALE 2025": [
        {
            "value": 5,
            "label": "Vincitore del torneo",
            "description": (
                "Riconoscimento speciale per la vittoria nel torneo con "
                "il maggior numero di iscritti mai organizzato."
            ),
        }
    ]
}


def slugify(value: str) -> str:
    """Crea ID leggibili e stabili a partire dai nomi."""
    normalized = unicodedata.normalize("NFKD", value)
    ascii_value = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", ascii_value.lower()).strip("-")
    if not slug:
        raise ValueError(f"Impossibile creare un ID dal valore: {value!r}")
    return slug


def get_year(tournament_name: str) -> int:
    years = re.findall(r"\b(20\d{2})\b", tournament_name)
    if not years:
        raise ValueError(
            f"Non trovo un anno (es. 2026) nel nome del torneo: "
            f"{tournament_name!r}"
        )
    return int(years[-1])


def read_result(value: Any, player_name: str, tournament_name: str) -> int | str:
    if isinstance(value, str) and value.strip().upper() == "NP":
        return "NP"

    # bool è una sottoclasse di int in Python: va escluso esplicitamente.
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        raise ValueError(
            f"Risultato non valido per {player_name!r} nel torneo "
            f"{tournament_name!r}: {value!r}. Usa NP oppure un numero da 0 a 5."
        )

    if not float(value).is_integer() or int(value) not in range(0, 6):
        raise ValueError(
            f"Risultato fuori intervallo per {player_name!r} nel torneo "
            f"{tournament_name!r}: {value!r}. Sono ammessi numeri interi da 0 a 5."
        )

    result = int(value)

    if result == 5 and tournament_name not in SPECIAL_RESULTS:
        raise ValueError(
            f"È stato trovato un risultato speciale 5 nel torneo "
            f"{tournament_name!r}, ma non è ancora descritto in SPECIAL_RESULTS "
            "nello script."
        )

    return result


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Genera players.json e tournaments.json dall'Excel."
    )
    parser.add_argument(
        "excel_path",
        help="Percorso del file Excel aggiornato (.xlsx).",
    )
    parser.add_argument(
        "--output-dir",
        default="public/data",
        help="Cartella di destinazione dei JSON (predefinita: public/data).",
    )
    parser.add_argument(
        "--sheet",
        default=SHEET_NAME,
        help=f"Foglio Excel da leggere (predefinito: {SHEET_NAME}).",
    )
    args = parser.parse_args()

    excel_path = Path(args.excel_path)
    output_dir = Path(args.output_dir)

    if not excel_path.is_file():
        print(f"ERRORE: file Excel non trovato: {excel_path}", file=sys.stderr)
        return 1

    try:
        # data_only=False: leggiamo i risultati inseriti nelle colonne dei tornei,
        # non le formule riepilogative di Excel. Le statistiche vengono ricalcolate qui.
        workbook = load_workbook(excel_path, data_only=False, read_only=False)

        if args.sheet not in workbook.sheetnames:
            raise ValueError(
                f"Foglio {args.sheet!r} non trovato. "
                f"Fogli disponibili: {', '.join(workbook.sheetnames)}"
            )

        sheet = workbook[args.sheet]

        # Le intestazioni dei tornei partono dalla colonna H e proseguono
        # fino all'ultima intestazione non vuota della riga 1.
        tournament_columns: list[tuple[int, str]] = []
        for column in range(FIRST_TOURNAMENT_COLUMN, sheet.max_column + 1):
            header = sheet.cell(row=1, column=column).value
            if header is None or not str(header).strip():
                continue
            tournament_columns.append((column, str(header).strip()))

        if not tournament_columns:
            raise ValueError(
                f"Non trovo intestazioni di tornei dalla colonna H in poi."
            )

        tournaments: list[dict[str, Any]] = []
        tournament_ids: set[str] = set()

        for order, (_, name) in enumerate(tournament_columns, start=1):
            tournament_id = slugify(name)
            if tournament_id in tournament_ids:
                raise ValueError(
                    f"ID torneo duplicato dopo la normalizzazione: {name!r} "
                    f"({tournament_id})."
                )
            tournament_ids.add(tournament_id)

            tournament: dict[str, Any] = {
                "id": tournament_id,
                "name": name,
                "year": get_year(name),
                "order": order,
            }

            if name in SPECIAL_RESULTS:
                tournament["specialResults"] = SPECIAL_RESULTS[name]

            tournaments.append(tournament)

        players: list[dict[str, Any]] = []
        player_ids: set[str] = set()
        player_names: set[str] = set()

        row = FIRST_PLAYER_ROW
        while row <= sheet.max_row:
            raw_name = sheet.cell(row=row, column=PLAYER_NAME_COLUMN).value

            # La prima riga senza nome chiude l'elenco dei giocatori:
            # eventuali legende o note più in basso non vengono lette.
            if raw_name is None or not str(raw_name).strip():
                break

            name = str(raw_name).strip()
            normalized_name = name.casefold()
            if normalized_name in player_names:
                raise ValueError(f"Nome giocatore duplicato nell'Excel: {name!r}")
            player_names.add(normalized_name)

            player_id = slugify(name)
            if player_id in player_ids:
                raise ValueError(
                    f"ID giocatore duplicato dopo la normalizzazione: {name!r} "
                    f"({player_id})."
                )
            player_ids.add(player_id)

            results: dict[str, int | str] = {}
            total_points = 0
            participations = 0
            absences = 0

            for (column, tournament_name), tournament in zip(
                tournament_columns, tournaments
            ):
                raw_result = sheet.cell(row=row, column=column).value
                result = read_result(raw_result, name, tournament_name)
                results[tournament["id"]] = result

                if result == "NP":
                    absences += 1
                else:
                    participations += 1
                    total_points += result

            average_points = (
                total_points / participations if participations else 0
            )
            total_events = participations + absences
            presence_rate = (
                participations / total_events if total_events else 0
            )
            qualification_index = average_points * presence_rate

            players.append(
                {
                    "id": player_id,
                    "name": name,
                    "totalPoints": total_points,
                    "averagePoints": average_points,
                    "participations": participations,
                    "absences": absences,
                    "presenceRate": presence_rate,
                    "qualificationIndex": qualification_index,
                    "results": results,
                }
            )

            row += 1

        if not players:
            raise ValueError("Non è stato trovato nessun giocatore nel foglio.")

        output_dir.mkdir(parents=True, exist_ok=True)
        players_path = output_dir / "players.json"
        tournaments_path = output_dir / "tournaments.json"

        players_path.write_text(
            json.dumps(players, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        tournaments_path.write_text(
            json.dumps(tournaments, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )

        print("Hall of Fame aggiornata correttamente.")
        print(f"Giocatori: {len(players)}")
        print(f"Tornei: {len(tournaments)}")
        print(f"File generato: {players_path}")
        print(f"File generato: {tournaments_path}")
        return 0

    except Exception as error:
        print(f"ERRORE durante la generazione: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
