import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = path.resolve('public/assets/images');
const OUTPUT_DIR = path.resolve('public/assets/images-webp');

const SUPPORTED_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.avif',
  '.tif',
  '.tiff',
]);

const WEBP_QUALITY = 82;

async function getFiles(directory) {
  const entries = await fs.promises.readdir(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const sourcePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getFiles(sourcePath)));
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();

    if (SUPPORTED_EXTENSIONS.has(extension)) {
      files.push(sourcePath);
    }
  }

  return files;
}

async function shouldConvert(sourcePath, outputPath) {
  try {
    const [sourceStats, outputStats] = await Promise.all([
      fs.promises.stat(sourcePath),
      fs.promises.stat(outputPath),
    ]);

    // Se l'originale è stato modificato dopo il WebP,
    // bisogna riconvertirlo.
    return sourceStats.mtimeMs > outputStats.mtimeMs;
  } catch {
    // Se il WebP non esiste, bisogna crearlo.
    return true;
  }
}

async function convertImage(sourcePath) {
  const relativePath = path.relative(SOURCE_DIR, sourcePath);

  const parsed = path.parse(relativePath);

  const outputRelativePath = path.join(
    parsed.dir,
    `${parsed.name}.webp`,
  );

  const outputPath = path.join(OUTPUT_DIR, outputRelativePath);

  const needsConversion = await shouldConvert(
    sourcePath,
    outputPath,
  );

  if (!needsConversion) {
    console.log(`→ Saltata: ${relativePath}`);
    return {
      status: 'skipped',
    };
  }

  await fs.promises.mkdir(path.dirname(outputPath), {
    recursive: true,
  });

  await sharp(sourcePath)
    .webp({
      quality: WEBP_QUALITY,
      effort: 5,
    })
    .toFile(outputPath);

  const sourceStats = await fs.promises.stat(sourcePath);
  const outputStats = await fs.promises.stat(outputPath);

  const sourceSize = sourceStats.size / 1024 / 1024;
  const outputSize = outputStats.size / 1024 / 1024;

  const reduction =
    ((sourceStats.size - outputStats.size) /
      sourceStats.size) *
    100;

  console.log(
    `✓ ${relativePath} → ${outputRelativePath}`,
  );

  console.log(
    `  ${sourceSize.toFixed(2)} MB → ${outputSize.toFixed(2)} MB ` +
      `(-${reduction.toFixed(1)}%)`,
  );

  return {
    status: 'converted',
  };
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(
      `Cartella sorgente non trovata: ${SOURCE_DIR}`,
    );

    process.exit(1);
  }

  const files = await getFiles(SOURCE_DIR);

  if (files.length === 0) {
    console.log('Nessuna immagine trovata.');
    return;
  }

  console.log(`Trovate ${files.length} immagini.`);
  console.log('');

  let converted = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    try {
      const result = await convertImage(file);

      if (result.status === 'converted') {
        converted++;
      } else {
        skipped++;
      }
    } catch (error) {
      errors++;

      console.error(
        `✗ Errore durante la conversione di: ${file}`,
      );

      console.error(error);
    }
  }

  console.log('');
  console.log('----------------------------------------');
  console.log('Conversione completata.');
  console.log(`Convertite: ${converted}`);
  console.log(`Saltate:    ${skipped}`);
  console.log(`Errori:     ${errors}`);
  console.log('----------------------------------------');
}

main();