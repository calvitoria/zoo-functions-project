const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length < 1) {
    return [];
  }
  const listaObj = [];
  ids.forEach((id) => listaObj.push(data.species.find((specie) => specie.id === id)));
  return listaObj;
}

module.exports = getSpeciesByIds;
