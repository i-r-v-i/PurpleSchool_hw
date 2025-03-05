const cards = [
  "4561-1213-4367-2612",
  "4561-2612-1234-5467  ",
  "4561-5943-5112-609",
  "4563-tyu-2345-1235",
];

// освобождаемся от лишних знаков в номере карты
const clearNum = (num) => {
  return num.split("-").join("").trim();
};

// отсеиваем невалидные номера
const validateData = (num) => {
  const card = Number(clearNum(num));
  if (!card) {
    console.log(`Invalid card's number - ${num}`);
    return;
  } else {
    return card;
  }
};

// меняем цифры согласно алгоритму
const caiculateSum = (num) => {
  return num * 2 > 9 ? num * 2 - 9 : num * 2;
};

// получаем массив, включающий модифицированные цифры через одну
const modifideStringtoArr = (str) => {
  if (str.length % 2 === 0) {
    let res = [];
    for (let i = 0; i < str.length - 1; i += 2) {
      const n = caiculateSum(str[i]);
      res.push(n);
      res.push(Number(str[i + 1]));
    }
    return res;
  } else {
    let res = [];
    for (let i = 1; i < str.length; i += 2) {
      const n = caiculateSum(str[i]);
      res.push(Number(str[i - 1]));
      res.push(n);
    }
    res.push(Number(str[str.length - 1]));
    return res;
  }
};

// суммируем цифры
const sumOfNumbers = (arr) => {
 return arr.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

// уточняем, проходит ли номер карты алгорит Луна
const isLunaAlgosValid = (card) => {
  const cardNum = validateData(card)?.toString();
  if (!cardNum) {
    return;
  }
  const cardArr = modifideStringtoArr(cardNum);
  return sumOfNumbers(cardArr) % 10 === 0;
};

//запускаем проверку на массивеп номеров, либо на отдельном номере
cards.forEach((card) => isLunaAlgosValid(card));
