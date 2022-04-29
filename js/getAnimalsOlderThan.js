const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const residentsAnimals = data.species.find((specie) => specie.name === animal).residents;
  return residentsAnimals.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
