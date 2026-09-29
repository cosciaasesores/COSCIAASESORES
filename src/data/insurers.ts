export interface Insurer {
    name: string;
    logo: string;
    // Medidas del PNG recortado (ver scripts/trim-insurer-logos.mjs); definen la proporción del logo.
    width: number;
    height: number;
    // Ajuste óptico fino para logos visualmente muy pesados (<1) o muy livianos (>1).
    scale?: number;
    // Ajuste solo para desktop (≥768px); si falta, se usa `scale`.
    desktopScale?: number;
}

export const insurers: Insurer[] = [
    { name: "Allianz", logo: "/companies/ALLIANZ.png", width: 931, height: 244, scale: 1.2, desktopScale: 1.5 },
    { name: "Barbuss", logo: "/companies/BARBUSS.png", width: 574, height: 109 },
    { name: "Experta Seguros", logo: "/companies/experta-seguros-logo.png", width: 376, height: 122, scale: 0.9 },
    { name: "Federación Patronal", logo: "/companies/federacionpatronal-compania-de-seguros.png", width: 199, height: 128, scale: 1.15 },
    { name: "Federación Patronal ART", logo: "/companies/Fed-Patronal-2024.png", width: 407, height: 203 },
    { name: "Galicia Seguros", logo: "/companies/galicia-seguros.png", width: 662, height: 244 },
    { name: "La Segunda Seguros", logo: "/companies/La-Segunda-Seguros.png", width: 225, height: 75, scale: 1.2, desktopScale: 1.3 },
    { name: "Mercantil Andina", logo: "/companies/MERCANTIL ANDINA.png", width: 1293, height: 244, scale: 1.1 },
    { name: "Meridional Seguros", logo: "/companies/MERIDIONAL.png", width: 100, height: 96 },
    { name: "Metropol", logo: "/companies/METROPOL.png", width: 350, height: 200, scale: 0.85, desktopScale: 1.5 },
    { name: "Noble Seguros", logo: "/companies/noble_logo_negro.png", width: 485, height: 178 },
    { name: "Premiar", logo: "/companies/PREMIAR.png", width: 402, height: 101 },
    { name: "Prevención ART", logo: "/companies/Logo-Prevencion-ART.png", width: 650, height: 202, desktopScale: 1.25 },
    { name: "Provincia Seguros", logo: "/companies/logo-provincia.png", width: 738, height: 244, scale: 1.2 },
    { name: "Provincia ART", logo: "/companies/prov art.png", width: 750, height: 184, scale: 1.2, desktopScale: 1.3 },
    { name: "Sancor Seguros", logo: "/companies/SANCOR SEGUROS.png", width: 365, height: 96 },
];
