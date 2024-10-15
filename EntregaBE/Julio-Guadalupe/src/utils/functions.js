const create = (flag) => {
    let units = flag === "cardiaca" ? "ppm" : "rpm";
    let sensor = flag === "cardiaca" ? "Max30100" : "HW-484 sonoro";
    const edad = Math.floor(Math.random() * 14); 
    const fecha_ingreso = new Date(); 
    const fecha_salida = new Date(fecha_ingreso); 
    
    const meses = Math.floor(Math.random() * 13); 
    fecha_salida.setMonth(fecha_salida.getMonth() + meses);
    
    return { fecha_ingreso, fecha_salida, units, sensor, edad };
};


module.exports = { create };