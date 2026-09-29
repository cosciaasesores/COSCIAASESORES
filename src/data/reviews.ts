// Reseñas reales de Google, transcriptas textualmente (no corregir: son palabras de los clientes).
export interface Review {
    name: string;
    text: string;
    stars: number;
}

export const reviews: Review[] = [
    {
        name: "Gustavo Scardaccione",
        text: "Hola buenas tardes realmente estoy muy conforme con el seguro siempre cumplieron choque dos veces y ni un pero Pero lo que quiero destacar es el último inconveniente que tuve pedi un servicio de grua llego a tiempo me dejan en mi domicilio y recién al otro día me di cuenta que con el gancho me rompieron el carter se lo comento a mi asesor Nahuel para que este solo en conocimiento;el se preocupo y ocupo del tema después de dos meses pude cobrar la reparación gracias por todo",
        stars: 5,
    },
    {
        name: "Alejandro Rodriguez",
        text: "Muy buena atención y predisposición para resolver cualquier duda y o problema\nUna exelente atención",
        stars: 5,
    },
    {
        name: "Dani Mancuso",
        text: "Hace más de 20 años que Coscia Asesores me brinda Exelente servicio y atención , más que recomendable , gracias siempre .",
        stars: 5,
    },
    {
        name: "Claudia Fabiana Casas",
        text: "Excelente atención!\nMuy satisfecha con la información recibida.\nAltamente recomendable!",
        stars: 5,
    },
    {
        name: "Agustin Lacco",
        text: "Excelente atención desde el primer contacto. Me asesoraron en referencia al seguro de mi auto y tengo que destacar la claridad en todo el proceso.",
        stars: 5,
    },
    {
        name: "ARIEL ZAPATA",
        text: "La verdad excelente calidad de atención y muy buen nivel de explicación cada vez que se presenta un problema con un auto",
        stars: 5,
    },
    {
        name: "Ignacio Martinez",
        text: "Excelente atención y calidad de servicio. 100% recomendables y confiables!",
        stars: 5,
    },
    {
        name: "leandro perullo",
        text: "Excelente servicio, atención y resolución de problemas. Hace más de 17 años que tengo todos los seguros con ellos.",
        stars: 5,
    },
    {
        name: "Ramiro Donis",
        text: "Todo excelente, trato de diez, trabajo de diez. Soy cliente hace años y nunca un drama, de hecho la única vez que el seguro quiso no pagarme, ellos me ayudaron a cobrar un siniestro donde el seguro se abría de gambas, unos capos!",
        stars: 5,
    },
    {
        name: "Gabriela Fernandez",
        text: "Estoy muy conforme con la atención y el servicio de brindan. Tienen varias compañías con las que trabajan. Los recomiendo!",
        stars: 5,
    },
];
