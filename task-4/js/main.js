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

function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let num;
let count = 0;

for (let i = 1; i <= 10; i++) {
    while (isNumber(num) == false || isInt(num) == false) {
        num = +prompt("Введите число " + i);
        if (isNumber(num) == false) {
            alert("Это не число");
        } else if (isInt(num) == false) {
            alert("Это не целое число");
        } else {
            if (isEven(num)) {
                count += 1;
            }
        }
    }
    num = "";
}

alert("В этом наборе чисел " + count + " чётных");