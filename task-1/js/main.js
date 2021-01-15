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

function invDigits(a) {
    let result = 0;
    while (a > 0) {
        result = result * 10 + (a % 10);
        a = (a - (a % 10)) / 10;
    }
    a = result;
    return a;
}

let num;
while (isNumber(num) == false || isInt(num) == false) {
    num = +prompt("Введите целое число");
    if (isNumber(num) == false) {
        alert("Это не число");
    } else if (isInt(num) == false) {
        alert("Это не целое число");
    }
}

alert(invDigits(num));