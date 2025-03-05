const dataArray = [
  "10-02-2022",
  "23/hh/7856",
  "er//f/67fg",
  "тест",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
  "23.04.2023"
];

// меняем европейский формат на американский и отсеиваем строки с неверным количеством символов
const changeFormat = (arr) => {
  const dates = [];
  for (const el of arr) {
    if (el.length === 10 && el.includes("/")) {
      const res = el.split("/");
      if (res.length === 3) {
        const date = res.join("/");
        dates.push(date);
      }
    }
    if (el.length === 10 && el.includes("-")) {
      const res = el.split("-");
      if (res.length === 3) {
        [res[0], res[1]] = [res[1], res[0]];
        const date = res.join("/");
        dates.push(date);
      }
    }
    if (el.length === 10 && el.includes(".")) {
      const res = el.split(".");
      if (res.length === 3) {
        [res[0], res[1]] = [res[1], res[0]];
        const date = res.join("/");
        dates.push(date);
      }
  }
}
  return dates;
};

// отсеиваем строки, не являющиеся датами, или содержащими ошибку
const isValidate = (arr) => {
  const dates = changeFormat(arr)
  const res = [];
  for (const el of dates) {
    const date = new Date(el);
    if (date != "Invalid Date") {
      res.push(date);
    }
  }
  return res;
};

// форматируем дату по единому шаблону
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}.${month}.${year}`;
};

const formatArr = (arr) => {
  const arrDates = isValidate(arr);
  return arrDates.map((el) => {
    return formatDate(el);
  });
};

// запускаем фильтр массива дат
const dd = formatArr(dataArray);
console.log(dd);
