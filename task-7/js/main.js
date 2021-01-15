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

function isPowerN(n, a) {
    let temp = 0;
    for (let i = 0; Math.pow(n, i) <= a; i++) {
        if (Math.pow(n, i) == a) {
            temp += 1;
        }
    }
    if (temp == 1) {
        return true;
    } else {
        return false;
    }
}

let num;
let powNum;
let count = 0;

// num = +prompt("enter N");
// powNum = +prompt("enter power N");

// alert(isPowerN(num, powNum));

while (isNumber(num) == false || isInt(num) == false || num <= 1) {
    num = +prompt("Введите число N (N > 1)");
    if (isNumber(num) == false) {
        alert("Это не число");
    } else if (isInt(num) == false) {
        alert("Это не целое число");
    } else if (num <= 1) {
        alert("Это число не больше 1");
    }
    } 


for (let i = 1; i <= 10; i++) {
    while (isNumber(powNum) == false || isInt(powNum) == false || isPositive(powNum) == false) {
        powNum = +prompt("Введите число " + i);
        if (isNumber(powNum) == false) {
            alert("Это не число");
        } else if (isInt(powNum) == false) {
            alert("Это не целое число");
        } else if (isPositive(powNum) == false) {
            alert("Это не положительное число");
        } else if (isPowerN(num, powNum)) {
            count += 1;
        }
        } 
        powNum = "";
    }

if (count == 0) {
    alert("В этом наборе чисел нет степеней числа N");
}
if (count == 1) {
    alert("В этом наборе чисел " + count + " степень числа N");
} else if (count > 1 && count < 5) {
    alert("В этом наборе чисел " + count + " степени числа N");
} else {
    alert("В этом наборе чисел " + count + " степеней числа N");
}
