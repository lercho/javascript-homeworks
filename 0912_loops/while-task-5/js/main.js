let num = +prompt("Введите число");
let i;
let factorial = 1;

while (isNaN(num) || num < 0 || num % 1 != 0) {
    alert("Неверное число");
    num = +prompt("Введите число");
} 

i = num;

while (i > 0) {
    factorial = factorial * i;
    --i;
}

alert("!" + num + " = " + factorial);