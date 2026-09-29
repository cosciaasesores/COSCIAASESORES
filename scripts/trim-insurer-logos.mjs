// Recorta el margen vacío de los logos de aseguradoras y los deja listos para el carrusel.
// Originales: assets/companies-original/ -> salida: public/companies/ (mismo nombre, lo usa /api/companies).
// Uso: node scripts/trim-insurer-logos.mjs  (imprime ancho×alto para cargar en src/data/insurers.ts)
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const SRC = "assets/companies-original";
const OUT = "public/companies";
const MAX_HEIGHT = 240;
const PADDING = 2;

const files = (await readdir(SRC)).filter((f) => f.toLowerCase().endsWith(".png"));

for (const file of files) {
    // trim() toma el color de la esquina superior izquierda (transparente o blanco) como fondo.
    const trimmed = await sharp(join(SRC, file))
        .ensureAlpha()
        .trim({ threshold: 20 })
        .toBuffer();

    const resized = await sharp(trimmed)
        .resize({ height: MAX_HEIGHT, withoutEnlargement: true })
        .toBuffer();

    const info = await sharp(resized)
        .extend({ top: PADDING, bottom: PADDING, left: PADDING, right: PADDING, background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ compressionLevel: 9, palette: true, quality: 90 })
        .toFile(join(OUT, file));

    console.log(`${file}\t${info.width}x${info.height}\t${Math.round(info.size / 1024)} KB`);
}
