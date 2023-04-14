export function createCode() {
  const randomNumber = Math.floor(Math.random() * 1000000000);
  const randomString = randomNumber.toString().padStart(7, "0").slice(0,5);
  return randomString;
}

export function getActualDate() {
  let date = new Date();

  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);

  let formattedDate = year + "-" + month + "-" + day;

  return formattedDate;
}