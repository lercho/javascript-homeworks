function isNumber(a) {
    if (typeof(a) != "number" || isNaN(a) || a < 0 || a > 9) {
        return false;
    } else {
        return true;
    }
}

function combineNum (a, b, c) {
    let result = a * 100 + b * 10 + c;
    return result;
}

let num1;
let num2;
let num3;

num1 = +prompt("Введите первую цифру");
if (isNumber(num1)) {
    num2 = +prompt("Введите вторую цифру");
    if (isNumber(num2)) {
        num3 = +prompt("Введите третью цифру");
        if (isNumber(num3)) {
            alert(combineNum (num1, num2, num3));
        } else {
            alert("Неверное число");
        }
    } else {
        alert("Неверное число");
    }
} else {
    alert("Неверное число");
}