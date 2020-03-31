export function setCommaToMoney(x) {
  const number = String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return number;
}
