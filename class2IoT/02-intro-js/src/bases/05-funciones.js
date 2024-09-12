// function saludar(nombre) {
//   return `Hola, ${nombre}`;
// }

// saludar = 30;

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => 'Hola mundo';

console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'calle927',
  };
};

console.log(getUser());
