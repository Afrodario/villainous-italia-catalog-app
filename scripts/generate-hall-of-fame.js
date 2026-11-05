#!/usr/bin/env node

/**
 * Rigenera players.json e tournaments.json a partire dall'Excel
 * della Hall of Fame di Villainous Italia.
 *
 * Uso:
 *   node scripts/generate-hall-of-fame.js "CAMPIONI NAZIONALI DI DISNEY VILLAINOUS.xlsx"
 *
 * Dipendenza:
 *   npm install xlsx
 */

const fs = require('node:fs');
const path = require('node:path');
const XLSX = require('xlsx');

const TOURNAMENT_METADATA = require('./tournament-metadata');

const SHEET_NAME = 'Foglio1';
const FIRST_PLAYER_ROW = 2;
const PLAYER_NAME_COLUMN = 1;       // A
const FIRST_TOURNAMENT_COLUMN = 8;  // H
const OUTPUT_DIR = path.resolve(__dirname, '../public/data');

const excelPath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(__dirname, '../CAMPIONI NAZIONALI DI DISNEY VILLAINOUS.xlsx');

function slugify(value) {
  const normalized = String(value).normalize('NFKD');
  return normalized
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getYear(tournamentName) {
  const matches = String(tournamentName).match(/\b20\d{2}\b/g);

  if (!matches) {
    throw new Error(
      `Non trovo un anno nel nome del torneo: "${tournamentName}"`,
    );
  }

  return Number(matches[matches.length - 1]);
}

function readResult(value, playerName, tournamentName) {
  if (typeof value === 'string' && value.trim().toUpperCase() === 'NP') {
    return 'NP';
  }

  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0 || value > 5) {
    throw new Error(
      `Risultato non valido per "${playerName}" nel torneo "${tournamentName}": ${JSON.stringify(value)}. ` +
      'Sono ammessi NP oppure numeri interi da 0 a 5.',
    );
  }

  if (value === 5 && !TOURNAMENT_METADATA[tournamentName]?.specialResults) {
    throw new Error(
      `È stato trovato un risultato speciale 5 nel torneo "${tournamentName}", ` +
      'ma il torneo non è configurato in tournament-metadata.js.',
    );
  }

  return value;
}

function writeJson(filename, data) {
  const outputPath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(
    outputPath,
    `${JSON.stringify(data, null, 2)}\n`,
    'utf8',
  );
  console.log(`✓ Generato: ${outputPath}`);
}

function main() {
  if (!fs.existsSync(excelPath)) {
    throw new Error(`File Excel non trovato: ${excelPath}`);
  }

  const workbook = XLSX.readFile(excelPath, {
    cellDates: false,
  });

  if (!workbook.SheetNames.includes(SHEET_NAME)) {
    throw new Error(
      `Foglio "${SHEET_NAME}" non trovato. Fogli disponibili: ${workbook.SheetNames.join(', ')}`,
    );
  }

  const sheet = workbook.Sheets[SHEET_NAME];

  // I tornei iniziano dalla colonna H e arrivano fino all'ultima intestazione
  // valorizzata della prima riga.
  const tournamentColumns = [];

  const sheetRange = XLSX.utils.decode_range(sheet['!ref']);

  for (let column = FIRST_TOURNAMENT_COLUMN; column <= sheetRange.e.c + 1; column++) {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: column - 1 });
    const value = sheet[cellAddress]?.v;

    if (value === undefined || value === null || String(value).trim() === '') {
      continue;
    }

    tournamentColumns.push({
      column,
      name: String(value).trim(),
    });
  }

  if (tournamentColumns.length === 0) {
    throw new Error('Non sono state trovate intestazioni di tornei dalla colonna H in poi.');
  }

  const tournaments = tournamentColumns.map(({ name }, index) => {
    const id = slugify(name);

    if (!id) {
      throw new Error(`Impossibile creare l'ID del torneo "${name}".`);
    }

    const metadata = TOURNAMENT_METADATA[name];

    if (!metadata) {
      throw new Error(
        `Il torneo "${name}" non è presente in tournament-metadata.js.`,
      );
    }

    return {
      id,
      name,
      year: getYear(name),
      order: index + 1,
      tour: metadata.tour,
      ...(metadata.specialResults
        ? { specialResults: metadata.specialResults }
        : {}),
    };
  });

  const tournamentIds = new Set();

  for (const tournament of tournaments) {
    if (tournamentIds.has(tournament.id)) {
      throw new Error(`ID torneo duplicato dopo la normalizzazione: ${tournament.id}`);
    }
    tournamentIds.add(tournament.id);
  }

  const players = [];
  const playerIds = new Set();
  const playerNames = new Set();

  for (let row = FIRST_PLAYER_ROW; row <= sheetRange.e.r + 1; row++) {
    const nameAddress = XLSX.utils.encode_cell({
      r: row - 1,
      c: PLAYER_NAME_COLUMN - 1,
    });

    const rawName = sheet[nameAddress]?.v;

    // La prima riga senza nome conclude l'elenco dei giocatori.
    if (rawName === undefined || rawName === null || String(rawName).trim() === '') {
      break;
    }

    const name = String(rawName).trim();
    const normalizedName = name.toLocaleLowerCase('it-IT');

    if (playerNames.has(normalizedName)) {
      throw new Error(`Nome giocatore duplicato nell'Excel: "${name}".`);
    }
    playerNames.add(normalizedName);

    const id = slugify(name);

    if (!id) {
      throw new Error(`Impossibile creare l'ID del giocatore "${name}".`);
    }

    if (playerIds.has(id)) {
      throw new Error(`ID giocatore duplicato dopo la normalizzazione: "${name}" → "${id}".`);
    }
    playerIds.add(id);

    const results = {};
    let totalPoints = 0;
    let participations = 0;
    let absences = 0;

    tournamentColumns.forEach(({ column, name: tournamentName }, index) => {
      const resultAddress = XLSX.utils.encode_cell({
        r: row - 1,
        c: column - 1,
      });

      const result = readResult(
        sheet[resultAddress]?.v,
        name,
        tournamentName,
      );

      results[tournaments[index].id] = result;

      if (result === 'NP') {
        absences++;
      } else {
        participations++;
        totalPoints += result;
      }
    });

    const averagePoints = participations > 0
      ? totalPoints / participations
      : 0;

    const totalEvents = participations + absences;
    const presenceRate = totalEvents > 0
      ? participations / totalEvents
      : 0;

    const qualificationIndex = averagePoints * presenceRate;

    players.push({
      id,
      name,
      totalPoints,
      averagePoints,
      participations,
      absences,
      presenceRate,
      qualificationIndex,
      results,
    });
  }

  if (players.length === 0) {
    throw new Error('Non è stato trovato nessun giocatore nel foglio Excel.');
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  writeJson('players.json', players);
  writeJson('tournaments.json', tournaments);

  console.log('');
  console.log(`Giocatori elaborati: ${players.length}`);
  console.log(`Tornei elaborati: ${tournaments.length}`);
  console.log('Generazione completata con successo.');
}

try {
  main();
} catch (error) {
  console.error(`\nERRORE: ${error.message}`);
  process.exit(1);
}
