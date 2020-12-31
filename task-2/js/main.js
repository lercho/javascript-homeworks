function isNumber(a) {
    if (typeof(a) != "number" || isNaN(a)) {
        return false;
    } else {
        return true;
    }
}

function factorial(a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
        result *= i;
    }
    return result;
}

let num = +prompt("Введите число");

if (isNumber(num)) {
    alert(factorial(num));
} else {
    alert("Неверное число");
}