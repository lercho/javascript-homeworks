let num1 = +prompt("Введите число 1");
let num2 = +prompt("Введите число 2");
let i;

if (num1 < num2) {
    i = num1;
} else {
    i = num2;
}

while (i > 0) {
    if (num1 % i == 0 && num2 % i == 0) {
        console.log(i);
    }
    --i;
}