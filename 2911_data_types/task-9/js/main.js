let num = +prompt("Введите пятизначное число");
let lastDig = num % 10;
alert((lastDig * 10000) + ((num - lastDig) / 10));