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

function isPrime(a) {
    let temp = 0;
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            temp += 1;
        }
    }
    if (temp == 0) {
        return true;
    } else {
        return false;
    }
}

let num;
let count = 0;

for (let i = 1; i <= 10; i++) {
    while (isNumber(num) == false || isInt(num) == false || isPositive(num) == false) {
        num = +prompt("Введите число " + i);
        if (isNumber(num) == false) {
            alert("Это не число");
        } else if (isInt(num) == false) {
            alert("Это не целое число");
        } else if (isPositive(num) == false) {
            alert("Это не положительное число");
        } else if (isPrime(num) && num != 1) {
            count += 1;
        }
        } 
        num = "";
    }

alert("В этом наборе чисел " + count + " простых");