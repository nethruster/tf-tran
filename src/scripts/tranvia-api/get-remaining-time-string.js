export default function getRemainingMinutesString(remainingMinutes) {
  switch (remainingMinutes) {
    case 0:
      return "Menos de un minuto";
      break;
    case 1:
      return "1 minuto";
      break;
    default:
      return `${remainingMinutes} minutos`;
      break;
  }
}
