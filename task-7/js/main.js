function checkNum (a) {
    if (typeof(a) != "number" || isNaN(a) || a < 0) {
        return false;
    } else {
        return true;
    }
}

function showTime(h, m, s) {
    let result = "";
    if (h < 10) {
        result += "0" + h + ":";
    } else {
        result += h + ":";
    }
    if (m < 10) {
        result += "0" + m + ":";
    } else {
        result += m + ":";
    }
    if (s < 10) {
        result += "0" + s;
    } else {
        result += s;
    }
    alert(result);
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

showTime(hour, minute, second);