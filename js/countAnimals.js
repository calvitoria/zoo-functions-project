const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animalsObj = {};
  if (animal === undefined || animal === null) {
    data.species.forEach((item) => {
      animalsObj[item.name] = item.residents.length;
    });
    return animalsObj;
  } if (Object.keys(animal).length === 1) {
    return data.species.find((item) => item.name === animal.specie).residents.length;
  } if (Object.keys(animal).length === 2) {
    return data.species.find((item) =>
      item.name === animal.specie).residents.filter((item) => item.sex === animal.sex).length;
  }
}
console.log(countAnimals({ specie: 'bears' }));
module.exports = countAnimals;
