const data = require('../data/zoo_data');

const getSpecies = (employee) => {
  const arraySpecies = [];
  employee.responsibleFor.forEach((idAnimalEmp) =>
    arraySpecies.push(data.species.find((specie) => specie.id === idAnimalEmp).name));
  return arraySpecies;
};

const getLocations = (employee) => {
  const arrayLocation = [];
  employee.responsibleFor.forEach((idAnimal) =>
    arrayLocation.push(data.species.find((specie) => specie.id === idAnimal).location));
  return arrayLocation;
};

const createEmployeeCoverege = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: getSpecies(employee),
  locations: getLocations(employee),
});

const allEmployees = () => {
  const employeesCoverage = [];
  data.employees.forEach((employee) => {
    employeesCoverage.push(createEmployeeCoverege(employee));
  });
  return employeesCoverage;
};

function getEmployeesCoverage(param) {
  if (param === undefined) return allEmployees();
  if (data.employees.filter((employee) => employee.firstName === param.name
    || employee.lastName === param.name || employee.id === param.id).length > 0) {
    return allEmployees().find((obj) => obj.fullName.includes(Object.values(param)[0])
      || obj.id === Object.values(param)[0]);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
