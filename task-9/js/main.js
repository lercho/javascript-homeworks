function checkNum (a) {
    if (typeof(a) != "number" || isNaN(a) || a < 0) {
        return false;
    } else {
        return true;
    }
}

function transformIntoTime (s) {
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

let sec;

while (checkNum (sec) == false) {
    sec = +prompt("Введите количество секунд");
}

alert("Введённое время: " + transformIntoTime (sec));