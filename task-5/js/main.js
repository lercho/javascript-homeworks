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

let num;

while (checkNum (num) == false) {
    num = +prompt("Введите число");
}
if (checkIfPerfect(num)) {
    alert("Это совершенное число!");
} else {
    alert("Это не совершенное число");
}