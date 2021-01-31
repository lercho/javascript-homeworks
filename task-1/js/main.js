function raiseToPower(num, pow) {
    if (pow <= 1) {
        return num;
    } else {
        return num * raiseToPower(num, pow - 1);
    }
}

let number = +prompt("Введите число");
let power = +prompt("Введите степень");

console.log(raiseToPower(number, power));