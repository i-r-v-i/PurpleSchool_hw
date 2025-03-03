const arr = [1, 40, -5, 10, 0];

const sort = (arr, sortMethod = "inc") => {
    let res = [...arr];
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res.length - 1; j++) {
        if (sortMethod === 'inc' && res[j] > res[j + 1]) {
          [res[i], res[j]] = [res[j], res[i]]
        }
  
        if (sortMethod === 'desc' && res[j] < res[j + 1]) {
          [res[i], res[j]] = [res[j], res[i]]
        }
      }
    }
    return res;
  }
 

  console.log(sort(arr, 'inc'));
  console.log(sort(arr, 'desc'))