// Fuente única de las preguntas frecuentes: la usan la sección FAQ y el JSON-LD (FAQPage).
export type FaqBlock =
    | { type: "p"; text: string }
    | { type: "section"; title: string; text: string }
    | { type: "list"; items: string[] };

export interface FaqItem {
    q: string;
    a: FaqBlock[];
}

export const faqs: FaqItem[] = [
    {
        q: "¿Cómo cotizo mi seguro?",
        a: [
            { type: "p", text: "Es muy simple. Podés cotizar online desde nuestro cotizador, escribirnos por WhatsApp o completar el formulario de contacto. Te responderemos a la brevedad con una cotización acorde a tus necesidades." },
        ],
    },
    {
        q: "¿Qué necesito para contratar el seguro?",
        a: [
            { type: "p", text: "Depende del tipo de seguro:" },
            { type: "section", title: "Automotores y Motovehículos:", text: "Vamos a necesitar foto del frente de la cédula verde y el año del vehículo o el título. Además, DNI (frente y dorso) del titular de la póliza, una dirección de correo electrónico y la forma de pago elegida." },
            { type: "section", title: "Otros riesgos (hogar, comercio, etc.):", text: "En estos casos, con indicarnos la dirección del riesgo y qué tipo de cobertura necesitás suele ser suficiente." },
            { type: "p", text: "En todos los casos, analizamos tu situación y gestionamos un plan a tu medida." },
        ],
    },
    {
        q: "¿Cuándo comienza la cobertura?",
        a: [
            { type: "p", text: "La cobertura comienza a las 12:00 horas del día de inicio de vigencia y finaliza a las 12:00 horas del último día indicado en la póliza." },
        ],
    },
    {
        q: "¿Cuál es la vigencia del seguro?",
        a: [
            { type: "p", text: "El contrato de seguro tiene una vigencia anual, salvo que por la naturaleza del riesgo se establezca un plazo distinto." },
            { type: "p", text: "Lo que puede variar es la forma de facturación de la póliza, que puede ser mensual, trimestral, cuatrimestral, semestral o anual, según cada caso." },
        ],
    },
    {
        q: "¿Cuáles son las formas de pago?",
        a: [
            { type: "p", text: "Aceptamos las siguientes formas de pago:" },
            {
                type: "list",
                items: [
                    "Efectivo (Rapipago o PagoFácil)",
                    "Débito automático mediante CBU",
                    "Tarjetas de crédito",
                    "Home Banking",
                    "Plataformas digitales (por ejemplo, Mercado Pago)",
                ],
            },
        ],
    },
    {
        q: "¿Qué hago si tengo un accidente o siniestro?",
        a: [
            { type: "p", text: "Comunicate con nosotros a través del botón de siniestros, donde podrás cargar toda la información necesaria, o directamente por WhatsApp. Si falta alguna documentación, nos pondremos en contacto con vos. Además, en la sección de siniestros vas a encontrar preguntas frecuentes con toda la información necesaria para una gestión ágil." },
        ],
    },
    {
        q: "¿En qué me beneficia contratar mi seguro mediante un productor asesor de seguros?",
        a: [
            { type: "p", text: "No solo contratás una póliza, sino que accedés a asesoramiento profesional y acompañamiento permanente. Estamos capacitados para entender tus necesidades y ayudarte en cada etapa, para que la gestión de tu seguro sea clara, simple y eficiente. Analizamos cada situación y adaptamos la cobertura para que obtengas la mejor relación entre cobertura y costo." },
        ],
    },
    {
        q: "¿Cuentan con atención presencial?",
        a: [
            { type: "p", text: "Sí. Nos encontramos ubicados en Calle Año 1852 N.º 8, El Palomar." },
        ],
    },
    {
        q: "¿Cuáles son los horarios de atención?",
        a: [
            { type: "p", text: "Atendemos de lunes a viernes de 09:00 a 17:00 hs, de manera presencial con cita previa. Fuera de ese horario, podés seguir en contacto con nosotros de forma online para urgencias. Siempre que estemos disponibles, vamos a responderte." },
        ],
    },
    {
        q: "¿Cuándo puedo solicitar la baja de mi seguro?",
        a: [
            { type: "p", text: "La rescisión del contrato puede solicitarse en cualquier momento, sin necesidad de expresar causa. En caso de corresponder, se deberá abonar la prima proporcional al tiempo de cobertura ya transcurrido." },
        ],
    },
];

export function faqAnswerText(blocks: FaqBlock[]): string {
    return blocks
        .map((b) => {
            if (b.type === "p") return b.text;
            if (b.type === "section") return `${b.title} ${b.text}`;
            return b.items.join(", ") + ".";
        })
        .join(" ");
}
