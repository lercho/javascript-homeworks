let hour = +prompt("Введите часы");
let min = +prompt("Введите минуты");
const MIN_IN_DAY = 24 * 60;
let result = MIN_IN_DAY - (hour * 60 + min);
let resultM = result % 60;
let resultH = (result - resultM) / 60;
alert(resultH + ":" + resultM);
