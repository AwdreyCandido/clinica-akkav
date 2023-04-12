export function createCode() {
  const randomNumber = Math.floor(Math.random() * 1000000000);
  const randomString = randomNumber.toString().padStart(7, "0").slice(0,5);
  return randomString;
}
