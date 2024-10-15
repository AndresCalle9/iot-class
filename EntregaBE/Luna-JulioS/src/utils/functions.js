
const servicios = ["Urgencias", "Hospitalizacion", "UCI", "UCE", "Cirugia"];

const equipos = [
    "Camillas", "Monitor signos vitales", "Ventiladores mecanicos",
    "Bombas de infusion", "Carro de paros"
];

const marcas = ["GE Healthcare", "Philips Healthcare", "Siemens Healthineers",
    "Medtronic", "Fresenius Medical Care", "Mindray", "Dräger", "Zoll Medical",
    "Stryker", "BD (Becton, Dickinson and Company)"
];

const seriales = ["52564jg", "25546lop", "9875tre", "69873nyt", "gg9648oo", "8975nuy88"];

const estados = ["En servicio", "Dado de baja"];

const plantillas = ["875544652215polknut", "jkjjbjhg98562nhmqrv", "65215poncqzc652031miy", "lknvtryhzzz523339745mnytf", "87956412lnvgtyharxzm"];

const estadosHuella = ["Exito", "Fallido", "Huella no encontrada"];

const acciones = ["Registro", "Autenticación", "Eliminación"]

const random = (target) => {

    if (target == 'servicios') {
        return servicios[Math.floor(Math.random() * servicios.length)];
    } else if (target == 'equipos') {

        return equipos[Math.floor(Math.random() * equipos.length)];
    } else if (target == 'marcas') {
        return marcas[Math.floor(Math.random() * marcas.length)];

    } else if (target == 'seriales') {
        return seriales[Math.floor(Math.random() * seriales.length)];

    } else if (target == 'estados') {
        return estados[Math.floor(Math.random() * estados.length)];

    } else if (target == 'plantillas') {
        return plantillas[Math.floor(Math.random() * plantillas.length)];

    } else if (target == 'estadosHuella') {
        return estadosHuella[Math.floor(Math.random() * estadosHuella.length)];

    } else if (target == 'acciones') {
        return acciones[Math.floor(Math.random() * acciones.length)];

    } else{
        return "Error"
    }
};

const randomNum = () => {
    return Math.floor(Math.random() * 1000);
}


module.exports = {
    randomNum,
    random,
};