# Generatore JSON Hall of Fame - Villainous Italia

## 1. Installazione

Dalla root del progetto Angular:

```bash
npm install xlsx
```

## 2. Posizionamento

Copia questi due file nella cartella `scripts/` del progetto:

- `generate-hall-of-fame.js`
- `tournament-metadata.js`

La struttura sarà:

```text
progetto/
├── public/
│   └── data/
│       ├── players.json
│       └── tournaments.json
├── scripts/
│   ├── generate-hall-of-fame.js
│   └── tournament-metadata.js
└── ...
```

## 3. Generazione

Dalla root del progetto:

```bash
node scripts/generate-hall-of-fame.js "C:\percorso\CAMPIONI NAZIONALI DI DISNEY VILLAINOUS(6).xlsx"
```

Lo script sovrascrive:

```text
public/data/players.json
public/data/tournaments.json
```

## 4. Cosa viene letto dall'Excel

Il file usa il foglio `Foglio1`.

- Nome giocatore: colonna A
- Risultati dei tornei: dalla colonna H in poi
- I giocatori vengono letti fino alla prima riga senza nome
- I tornei vengono ricavati dalle intestazioni della riga 1

Per ogni giocatore vengono ricalcolati:

- `totalPoints`
- `averagePoints`
- `participations`
- `absences`
- `presenceRate`
- `qualificationIndex`

I risultati vengono mantenuti come numeri oppure `NP`.

## 5. Dati non presenti nell'Excel

`tournament-metadata.js` contiene i dati che il foglio non può fornire:

- tour di appartenenza;
- eventuali `specialResults`.

Attualmente sono configurati i quattro tour usati dalla Hall of Fame:

- 2023 → `Villainous Italia Tour`
- 2024 → `Good to Be Bad Tour`
- 2025 → `Bad to the Bone Tour`
- 2026 → `The Bad Side Tour`

Il risultato speciale `5` di `BAD TO THE BONE TOUR ROMA NATALE 2025` è mantenuto nella configurazione.

## 6. Controlli di sicurezza

Lo script interrompe la generazione se trova:

- un foglio Excel diverso da `Foglio1`;
- un torneo non configurato in `tournament-metadata.js`;
- un ID torneo duplicato;
- un nome giocatore duplicato;
- un ID giocatore duplicato;
- un risultato diverso da `NP` o da un intero tra 0 e 5;
- un valore `5` non associato a un `specialResults` configurato.

In questo modo un errore nell'Excel non produce silenziosamente JSON incompleti.
