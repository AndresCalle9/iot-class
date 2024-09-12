import heroes, { owners } from '../data/heroes';

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(3));

const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

// console.log(getHeroesByOwner('DC'));

// console.log(owners);

export { getHeroeById, getHeroesByOwner };
