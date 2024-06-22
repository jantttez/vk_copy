export function getCurrentDate() {
  const qqq = Date.now();
  const eee = new Date(qqq);

  const year = eee.getFullYear();
  const month = eee.getMonth();
  const day = eee.getDay();
  const hours = eee.getHours();
  const minute = eee.getMinutes();
  const time = `${hours}-${minute}`;
  const date = `${year}/${month}/${day}:${time}`;

  return date;
}
