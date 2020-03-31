export function setCommaToMoney(x) {
  let number = String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  number = `${number},-`;
  return number;
}
