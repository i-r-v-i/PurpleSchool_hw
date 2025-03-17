const sum = (n1, n2) => n1 + n2;

const sub = (n1, n2) => n1 - n2;

const mult = (n1, n2) => n1 * n2;

const divis = (n1, n2) => n1 / n2;

const culcResult = (fn) => {
   const a = document.getElementById('num1');
   const b = document.getElementById('num2');
   const n1 = +a.value;
   const n2 = +b.value;
   if(n1 && n2) {
    const res = document.getElementById('res');
    res.textContent = fn(n1,n2);
    res.style.backgroundColor = 'rgb(182, 236, 184)'
    a.value = '';
    b.value = '';
   }
}

const clearFilds =() => {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    const res = document.getElementById('res');
    res.textContent = '';
    res.style.backgroundColor = '#fff'
}


document.getElementById('sum').addEventListener('click', () => culcResult(sum));
document.getElementById('sub').addEventListener('click', () => culcResult(sub));
document.getElementById('mult').addEventListener('click', () => culcResult(mult));
document.getElementById('div').addEventListener('click', () => culcResult(divis));
document.getElementById('clear').addEventListener('click', clearFilds);