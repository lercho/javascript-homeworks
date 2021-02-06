// Написать функцию возведения числа в степень.

function toPower(num, pow) {
    if (pow <= 1) {
        return num; 
    } else {
        return num * toPower(num, pow - 1);
    }
}

number = +prompt("Введите число");
power = +prompt("Введите степень");

console.log(toPower(number, power));