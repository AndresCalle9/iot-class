const create = (alimento, flag) => {
    let units = "";
    const sensor = "DHT11";
    let tipo_alimento = "otro";

    const alimentos = {
        tuberculo: ["papa", "yuca", "zanahoria"],
        fruta: ["manzana", "pera"],
        verdura: ["lechuga", "tomate", "cilantro"],
        proteico: ["pollo", "carne"]
    };

    const horasExpiracionPorTipo = {
        tuberculo: 190,
        fruta: 360,
        verdura: 168,
        proteico: 240,
        otro: 0
    };

    for (const [tipo, lista] of Object.entries(alimentos)) {
        if (lista.includes(alimento)) {
            tipo_alimento = tipo;
            break;
        }
    }

    const horas_expirar = horasExpiracionPorTipo[tipo_alimento];

    units = flag === "temperatura" ? "°C" : "%";

    return { tipo_alimento, horas_expirar, sensor, units };
}


module.exports = { create };