let number = +prompt("Введите трёхзначное число");
let digit1;
let digit2;
let digit3;

if (isNaN(number)) {
    alert("Это не число");
} else if (number < 100 || number > 999) {
    alert("Это не трёхзначное число");
} else {
    digit1 = +String(number)[0];
    digit2 = +String(number)[1];
    digit3 = +String(number)[2];

    if (digit1 == digit2 || digit1 == digit3 || digit2 == digit3) {
        alert("В числе есть одинаковые цифры!");
    } else {
        alert("В числе нет одинаковых цифр");
    }
}
