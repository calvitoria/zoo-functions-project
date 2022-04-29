const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const firstSpecie = data.species.find((specie) => specie.id === findEmployee.responsibleFor[0]);
  const oldest = firstSpecie.residents.map((object) =>
    object.age).sort((age1, age2) => (age2 - age1))[0];
  const oldestAnimal = Object.values(firstSpecie.residents.find((animal) => animal.age === oldest));
  return oldestAnimal;
}

// console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));

module.exports = getOldestFromFirstSpecies;
