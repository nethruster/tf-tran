export default function (remainingMinutes) {
  switch (remainingMinutes) {
    case 0:
      return "Menos de un minuto";
      break;
    case 1:
      return "1 minuto";
      break;
    default:
      return _minutesToHoursAndSeconds(remainingMinutes);
      break;
  }
}

function _minutesToHoursAndSeconds(minutes) {
  let hours = minutes / 60;
  let roundHours = Math.floor(hours);
  let remainderMinutes = Math.round((hours - roundHours) * 60);

  let hoursString = `${roundHours} hora${roundHours > 1 ? 's' : ''}`
  let minutesString = `${remainderMinutes} minutos`

  if(roundHours > 0 && remainderMinutes > 0) {
    return `${hoursString} y ${minutesString}`
  } 

  if(roundHours > 0) {
    return hoursString
  }

  if(remainderMinutes > 0) {
    return minutesString
  }
}
