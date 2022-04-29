const data = require('../data/zoo_data');

function includeNames(options) {
  const objLocationNames = { NE: [], NW: [], SE: [], SW: [] };
  if (options.includeNames === true) {
    data.species.forEach((specie) => {
      switch (specie.location) {
      case 'NE': objLocationNames.NE.push({ [specie.name]: specie.residents.map((resident) =>
        resident.name) }); break;
      case 'SE': objLocationNames.SE.push({ [specie.name]: specie.residents.map((resident) =>
        resident.name) }); break;
      case 'NW': objLocationNames.NW.push({ [specie.name]: specie.residents.map((resident) =>
        resident.name) }); break;
      default: objLocationNames.SW.push({ [specie.name]: specie.residents.map((resident) =>
        resident.name) }); break;
      }
    });
  } return objLocationNames;
}

function getAnimalMap(options) {
  const objLocation = { NE: [], NW: [], SE: [], SW: [] };
  if (options === undefined || !options.includeNames) {
    data.species.forEach((specie) => objLocation[specie.location].push(specie.name));
    return objLocation;
  }
  return includeNames(options);
}

console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;

// function includeNames();
