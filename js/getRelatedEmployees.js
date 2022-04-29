const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}
function getRelatedEmployees(managerId) {
  const peopleManaged = [];
  if (isManager(managerId) === true) {
    data.employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        peopleManaged.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return peopleManaged;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
