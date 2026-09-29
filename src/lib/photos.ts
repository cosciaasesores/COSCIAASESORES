// Solo servidor: detecta las fotos que el cliente deja en public/fotos (ver public/fotos/LEEME.txt).
import fs from "fs";
import path from "path";

const PHOTO_NAMES = ["gustavo", "nahuel", "inicio"] as const;
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export type SitePhotos = Partial<Record<(typeof PHOTO_NAMES)[number], string>>;

export function getSitePhotos(): SitePhotos {
    try {
        const dir = path.join(process.cwd(), "public", "fotos");
        const files = fs.readdirSync(dir);
        const photos: SitePhotos = {};

        for (const name of PHOTO_NAMES) {
            const file = files.find((f) => {
                const ext = path.extname(f).toLowerCase();
                return EXTENSIONS.includes(ext) && path.basename(f, path.extname(f)).toLowerCase() === name;
            });
            // Se respeta el nombre real del archivo: Vercel distingue mayúsculas.
            if (file) photos[name] = `/fotos/${encodeURIComponent(file)}`;
        }

        return photos;
    } catch {
        return {};
    }
}
