function checkNum (a) {
    if (typeof(a) != "number" || isNaN(a) || a < 0) {
        return false;
    } else {
        return true;
    }
}

function substractTime (h1, m1, s1, h2, m2, s2) {
    let s = h1 * 3600 + m1 * 60 + s1 - (h2 * 3600 + m2 * 60 + s2);
    let result = "";
    let temp = s;
    if (s / 3600 >= 0 && s / 3600 < 10) {
        result += "0" + Math.trunc(s / 3600) + ":";
    } else {
        result += Math.trunc(s / 3600) + ":";
    }
    temp -= Math.trunc(s / 3600) * 3600;

    if (temp / 60 > 0 && temp / 60 < 10) {
        result += "0" + Math.trunc(temp / 60) + ":";
    } else {
        result += Math.trunc(temp / 60) + ":";
    }
    temp -= Math.trunc(temp / 60) * 60;
    
    if (temp < 10) {
        result += "0" + temp;
    } else {
        result += temp;
    }
    return result;

}

let hour1;
let minute1;
let second1;
let hour2;
let minute2;
let second2;

while (checkNum (hour1) == false) {
    hour1 = +prompt("Введите часы 1");
}
while (checkNum (minute1) == false) {
    minute1 = +prompt("Введите минуты 1");
}
while (checkNum (second1) == false) {
    second1 = +prompt("Введите секунды 1");
}
while (checkNum (hour2) == false) {
    hour2 = +prompt("Введите часы 2");
}
while (checkNum (minute2) == false) {
    minute2 = +prompt("Введите минуты 2");
}
while (checkNum (second2) == false) {
    second2 = +prompt("Введите секунды 2");
}

alert("Разница между введённым временем: " + substractTime (hour1, minute1, second1, hour2, minute2, second2));