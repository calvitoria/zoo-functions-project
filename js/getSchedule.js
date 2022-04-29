const data = require('../data/zoo_data');

function retornaObjeto() {
  const objeto = {};

  Object.keys(data.hours).forEach((day) => {
    if (day === 'Monday') {
      objeto[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      objeto[day] = {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: data.species.filter((specie) =>
          specie.availability.includes(day)).map((elemento) => elemento.name),
      };
    }
  });

  return objeto;
}

function checarParametro(parametro) {
  if (data.species.filter((element) => element.name).map((element) =>
    element.name).some((element) => element === parametro)) {
    return data.species.find((specie) => specie.name === parametro).availability;
  }
  if (Object.keys(data.hours).includes(parametro)) {
    return { [parametro]: retornaObjeto()[parametro] };
  }
  return retornaObjeto();
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return retornaObjeto();
  }
  return checarParametro(scheduleTarget);
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
