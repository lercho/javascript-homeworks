function checkNum (a) {
    if (typeof(a) != "number" || isNaN(a) || a < 0) {
        return false;
    } else {
        return true;
    }
}

function calcSeconds (h, m, s) {
    return h * 3600 + m * 60 + s;
}

let hour;
let minute;
let second;

while (checkNum (hour) == false || hour > 23) {
    hour = +prompt("Введите часы");
}
while (checkNum (minute) == false || minute >= 60) {
    minute = +prompt("Введите минуты");
}
while (checkNum (second) == false || second >= 60) {
    second = +prompt("Введите секунды");
}

alert(calcSeconds (hour, minute, second));