const positionLat = 9;
const positionLong = 7;
const addressLat = 10;
const addressLong = 5;

const a = positionLat - addressLat;
const b = addressLat - addressLong;

const d = Math.sqrt(a ** 2 + b ** 2).toFixed(1);
console.log(`Расстояние до точки назначения ${d} км`)