const convertMoney = (sum, currencyFrom, currencyTo) => {
  const rubToUSD = 96;
  const USDToRub = (1 / rubToUSD).toFixed(2);
  const rubToEuro = 101;
  const euroToRub = (1 / rubToEuro).toFixed(2);
  const USDToEuro = 1.04;
  const euroToUsd = (1 / USDToEuro).toFixed(2);

  currencyFrom = currencyFrom.toUpperCase();
  currencyTo = currencyTo.toUpperCase();
  let tagget;
  // RUB, USD, EURO
  const taggetRate = () => {
  switch (true) {
    case currencyFrom === "RUB" && currencyTo === "USD":
      return tagget=USDToRub;
    case currencyFrom === "USD" && currencyTo === "RUB":
      return tagget=rubToUSD;
    case currencyFrom === "EURO" && currencyTo === "RUB":
      return tagget=rubToEuro;
    case currencyFrom === "RUB" && currencyTo === "EURO":
      return tagget=euroToRub;
    case currencyFrom === "USD" && currencyTo === "EURO":
      return tagget=euroToUsd;
    case currencyFrom === "EURO" && currencyTo === "USD":
      return tagget=USDToEuro;
    default:
      return tagget=0;
  }
}
  return sum * taggetRate() || null;
};

console.log(convertMoney(1, "euro", "ghj"));
console.log(convertMoney(1, "rub", "euro"));
console.log(convertMoney(1, "euro", "usd"));
console.log(convertMoney(1, "usd", "rub"));
