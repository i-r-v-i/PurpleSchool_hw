const CURRENCY_LIST = {
  USD: { sum: 90, marker: "$" },
  EUR: { sum: 100, marker: "€" },
  RUB: { sum: 1, marker: "₽" },
};

function isValidCurrency(currency) {
  const isExists = Object.keys(CURRENCY_LIST).includes(currency);
  if (!isExists) {
    console.log(`Валюта [${currency}] не поддерживается для обмена`);
  }
  return isExists;
}

const convertMoney = (sum, from, to) => {
  from = from.toUpperCase();
  to = to.toUpperCase();

  if (from === to) {
    return `Входящая и исходящая валюта одинаковы. Конвертация невозможна`;
  }

  // Проверяем наличие входящей валюты для обмена
  if (!isValidCurrency(from)) {
    return null;
  }
  // Проверяем наличие исходящей валюты для обмена
  if (!isValidCurrency(to)) {
    return null;
  }
  // return sum * taggetRate() || null;
  const { sum: a, marker: im } = CURRENCY_LIST[from]; // im = inMarker
  const { sum: b, marker: om } = CURRENCY_LIST[to]; // om = outMarker

  return `В результате обмена ${sum}${im} Вы получите ${((sum * a) / b).toFixed(2)}${om}`;
};

console.log(convertMoney(1, "eur", "ghj"));
console.log(convertMoney(1, "eur", "eur"));
console.log(convertMoney(1, "eur", "usd"));
console.log(convertMoney(1, "usd", "rub"));
