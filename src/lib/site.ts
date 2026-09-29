// Datos de contacto y destinos externos del sitio, centralizados.

// Cotizador online. En noviembre se reemplaza por el multicotizador cambiando solo esta línea.
export const QUOTER_URL = "https://sistema.woker.ar/link/cosciaasesores/";

export const WHATSAPP_NUMBER = "5491158276780";
export const WHATSAPP_DISPLAY = "11 5827 6780";
export const WHATSAPP_QUOTE_TEXT = "Hola! Quisiera cotizar un seguro";

export function whatsappUrl(text?: string) {
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const EMAIL = "cosciaasesores@gmail.com";
export const ADDRESS = "Año 1852 Nº 8 - El Palomar";
export const MAPS_URL = "https://maps.app.goo.gl/fVJbztVW5aQeNkX49";
export const BUSINESS_HOURS = "Lunes a viernes de 09:00 a 17:00 hs";

// Perfil de Google Maps del negocio, donde están las reseñas.
export const GOOGLE_REVIEWS_URL = MAPS_URL;
// Cantidad de reseñas en Google (dato del cliente). Actualizar cuando crezca.
export const GOOGLE_REVIEWS_COUNT = "+100";

export const SOCIAL = {
    instagram: "https://www.instagram.com/cosciaasesores",
    facebook: "https://www.facebook.com/cosciaasesores",
};

export const ADS_ID = "AW-18123731177";

// Etiquetas de conversión de Google Ads (la parte después de "AW-18123731177/").
// Mientras estén vacías solo se registran eventos en GA4 y Meta.
export const ADS_CONVERSION_LABELS = {
    whatsapp: "",
    quoter: "",
};
