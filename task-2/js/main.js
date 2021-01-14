function isNumber(a) {
    if (typeof(a) !== "number" || isNaN(a)) {
        return false;
    } else {
        return true;
    }
}

function isInt(a) {
    if (a % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

function isPositive(a) {
    if (a > 0) {
        return true;
    } else {
        return false;
    }
}

function AddRightDigit(d, a) {
    a = a * 10 + d;
    return a;
}

let num;
let digit1;
let digit2;

while (isNumber(num) == false || isInt(num) == false || isPositive(num) == false) {
    num = +prompt("Введите целое положительное число");
    if (isNumber(num) == false) {
        alert("Это не число");
    } else if (isInt(num) == false) {
        alert("Это не целое число");
    } else if (isPositive(num) == false) {
        alert("Это не положительное число");
    }
}

while (isNumber(digit1) == false || digit1 < 0 || digit1 > 9) {
    digit1 = +prompt("Введите первую цифру от 0 до 9");
    if (isNumber(digit1) == false) {
        alert("Это не число");
    } else if (digit1 < 0 || digit1 > 9) {
        alert("Это не цифра");
    }
}

num = AddRightDigit(digit1, num);
alert(num);

while (isNumber(digit2) == false || digit2 < 0 || digit2 > 9) {
    digit2 = +prompt("Введите вторую цифру от 0 до 9");
    if (isNumber(digit2) == false) {
        alert("Это не число");
    } else if (digit2 < 0 || digit2 > 9) {
        alert("Это не цифра");
    }
}

num = AddRightDigit(digit2, num);
alert(num);