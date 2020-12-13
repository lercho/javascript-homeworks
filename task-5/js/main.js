let number = +prompt("Введите пятизначное число");
if (isNaN(number)) {
    alert("Это не число");
} else if (number < 10000 || number > 99999) {
    alert("Это не пятизначное число");
} else if (+String(number)[0] == +String(number)[4] && +String(number)[1] == +String(number)[3]) {
    alert("Это палиндром!");
} else {
    alert("Это не палиндром");
}