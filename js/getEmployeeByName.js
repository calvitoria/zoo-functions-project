const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === null || employeeName === '') {
    return {};
  }
  let resultEmployee = {};
  data.employees.forEach((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      resultEmployee = employee;
    }
  });
  return resultEmployee;
}

module.exports = getEmployeeByName;
