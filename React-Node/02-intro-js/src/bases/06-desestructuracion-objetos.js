const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321,
  },
  clave: 'IronMan',
  rango: 'Soldado',
};

console.log(persona.apellido);
console.log(persona.nombre);
console.log(persona['edad']);

const { nombre, apellido, edad, clave } = persona;

console.log('///////');
console.log(nombre);
console.log(apellido);
console.log(edad);

// const retornaPersona = (usuario) => {
//   const { nombre, apellido, edad, clave } = usuario;
//   console.log(nombre, apellido, edad, clave);
// };

// Jugar con el rango, undefined, defecto, original
// const retornaPersona = ({ nombre, edad, rango = 'Capitán' }) => {
//   console.log(nombre, edad, rango);
// };

// console.log('///////');
// retornaPersona(persona);

//useContext
const retornaPersona = ({ clave, nombre, edad, rango }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.3232,
      lng: 34.9233321,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat, lng);

// const { nombreClave, anios, latlng } = retornaPersona(persona);
// console.log(nombreClave, anios);
// console.log(latlng);

// console.log('///////');
// const { lat, lng } = latlng;
// console.log(lat, lng);
