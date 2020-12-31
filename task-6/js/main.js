function checkNum (a) {
    if (typeof(a) != "number" || isNaN(a)) {
        return false;
    } else {
        return true;
    }
}

function checkIfPerfect (a) {
    let temp = 0;
    for (let i = 0; i < a; i++) {
        if (a % i == 0) {
            temp += i;
        }
    }
    if (a == temp) {
        return true;
    } else {
        return false;
    }
}

function showPerfect(a, b) {
    let result = "";
    for (; a <= b; a++) {
        if (checkIfPerfect (a)) {
            result += String(a) + ", ";
        }
    }
    return result.slice(0, -2);
}

let min;
let max;

while (checkNum (min) == false) {
    min = +prompt("Введите минимальное число диапазона");
}

while (checkNum (max) == false) {
    max = +prompt("Введите максимальное число диапазона");
}

alert(showPerfect(min, max));