let num = +prompt("Введите число");
let isPrime = 1;

for (let i = 2; i < num; ++i) {
    if (num % i == 0) {
        isPrime = 0;
        break;
    }
}

if (isPrime == 1) {
    alert("Это простое число!");
} else {
    alert("Это составное число");
}