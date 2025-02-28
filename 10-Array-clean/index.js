const filterArr = (fn, arr) => {
  const res = [];

  for (const i of arr) {
    if (fn(i) === true) {
      res.push(i);
    }
  }
  return res;
};

const isSatisfied = (n) => {
  return n > 5;
};

const arr = [3, 6, 9, 2];
filterArr(isSatisfied, arr);
