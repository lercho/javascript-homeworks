function isNumber(a) {
    if (typeof(a) != "number" || isNaN(a)) {
        return false;
    } else {
        return true;
    }
}

function compareNumbers(a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
}

let num1;
let num2;

num1 = +prompt("Введите число 1");
if (isNumber(num1)) {
    num2 = +prompt("Введите число 2");
    if (isNumber(num2)) {
        alert(compareNumbers(num1, num2));
    } else {
        alert("Неверное число");
    }
} else {
    alert("Неверное число");
} 