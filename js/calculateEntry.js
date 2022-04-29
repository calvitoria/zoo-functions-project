const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // entrada: array de objetos
  const returnObject = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      returnObject.child += 1;
    } if (element.age >= 18 && element.age < 50) {
      returnObject.adult += 1;
    } if (element.age >= 50) {
      returnObject.senior += 1;
    }
  });
  return returnObject;
}

function calculateEntry(entrants) {
  const priceChild = 20.99;
  const priceAdult = 49.99;
  const priceSenior = 24.99;
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const objectEntrance = countEntrants(entrants);
  const totalPrice = (objectEntrance.child * priceChild)
  + (objectEntrance.adult * priceAdult)
  + (objectEntrance.senior * priceSenior);
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
