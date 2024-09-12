const persona = {
  nombre: 'Andrés',
  apellido: 'Calle',
  edad: 30,
  direccion: {
    ciudad: 'Medellín',
    zip: 123456,
    lat: 14.1234,
    lng: 34.1234,
  },
};

console.log(persona);
// console.table(persona);

const persona2 = persona;

persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona);

const persona3 = { ...persona };

persona3.nombre = 'Juan';

console.log(persona3);
console.log(persona);
