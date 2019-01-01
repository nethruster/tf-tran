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
  let remainderMinutes = (hours - roundHours) * 60;
  let roundMinutes = Math.round(remainderMinutes);

  let hoursString = `${roundHours} hora${roundHours > 1 ? 's' : ''}`
  let minutesString = `${roundMinutes} minutos`

  if(roundHours > 0 && roundMinutes > 0) {
    return `${roundHours} y ${roundMinutes}`
  } 

  if(roundHours > 0) {
    return hoursString
  }

  if(roundMinutes > 0) {
    return minutesString
  }
}
