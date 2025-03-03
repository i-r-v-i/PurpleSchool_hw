// не поняла, зачем строку переводить в массив, если в строке нам доступна длина и возможность итерации
const crypto = (password) => {
  let res = "";
  let passString = password.toString(); // на случай, если передали число
  if (passString.length % 2 === 0) {
    for (let i = 0; i < passString.length; i += 2) {
      res += passString[i + 1] + passString[i];
    }
  } else {
    for (let i = 0; i < passString.length - 1; i += 2) {
      res += passString[i + 1] + passString[i];
    }
    res += passString[passString.length - 1];
  }
  return res;
};

crypto(34567);

const checkPassword = (password, userPassword) => {
  const decryptedPass = crypto(password).toString();
  return decryptedPass === userPassword.toString();
};

checkPassword("43657", 34567);
