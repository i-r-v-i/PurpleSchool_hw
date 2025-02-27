const arr = [1, 40, -5, 10, 0];

const sort = (arr, sortMethod = "inc") => {
    let res = [...arr];
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res.length - 1; j++) {
        if (sortMethod === 'inc' && res[j] > res[j + 1]) {
          let temp = res[j];
          res[j] = res[j + 1];
          res[j + 1] = temp;
        }
  
        if (sortMethod === 'desc' && res[j] < res[j + 1]) {
          let temp = res[j]
          res[j] = res[j + 1]
          res[j + 1] = temp
        }
      }
    }
    return res;
  }
 

sort(arr, 'inc');
sort(arr, 'desc')