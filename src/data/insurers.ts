export interface Insurer {
    name: string;
    logo: string;
    // Compensa logos con mucho margen interno para que todos se vean de tamaño parecido.
    scale?: number;
}

export const insurers: Insurer[] = [
    { name: "Allianz", logo: "/companies/ALLIANZ.png", scale: 1.2 },
    { name: "Barbuss", logo: "/companies/BARBUSS.png" },
    { name: "Experta Seguros", logo: "/companies/experta-seguros-logo.png", scale: 0.8 },
    { name: "Federación Patronal", logo: "/companies/federacionpatronal-compania-de-seguros.png", scale: 1.2 },
    { name: "Federación Patronal ART", logo: "/companies/Fed-Patronal-2024.png" },
    { name: "Galicia Seguros", logo: "/companies/galicia-seguros.png" },
    { name: "La Segunda Seguros", logo: "/companies/La-Segunda-Seguros.png", scale: 1.7 },
    { name: "Mercantil Andina", logo: "/companies/MERCANTIL ANDINA.png", scale: 1.1 },
    { name: "Meridional Seguros", logo: "/companies/MERIDIONAL.png", scale: 1.2 },
    { name: "Metropol", logo: "/companies/METROPOL.png", scale: 1.2 },
    { name: "Noble Seguros", logo: "/companies/noble_logo_negro.png", scale: 0.9 },
    { name: "Premiar", logo: "/companies/PREMIAR.png" },
    { name: "Prevención ART", logo: "/companies/Logo-Prevencion-ART.png", scale: 1.2 },
    { name: "Provincia Seguros", logo: "/companies/logo-provincia.png", scale: 1.2 },
    { name: "Provincia ART", logo: "/companies/prov art.png", scale: 1.6 },
    { name: "Sancor Seguros", logo: "/companies/SANCOR SEGUROS.png", scale: 0.9 },
];
