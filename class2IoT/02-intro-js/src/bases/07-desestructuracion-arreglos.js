const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [p1] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

console.log('///////');
const [n1, n2, n3] = personajes;
console.log(n1);
console.log(n2);
console.log(n3);

const retornaArreglo = () => {
  return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//useState
const ejemplo = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola mundo');
    },
  ];
};

const [nombre, setNombre] = ejemplo('Goku');
