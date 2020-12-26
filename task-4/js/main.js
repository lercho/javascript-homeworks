function checkNum (a) {
    if (typeof(a) != "number" || isNaN(a) || a <= 0) {
        return false;
    } else {
        return true;
    }
}

function rectangleArea(a, b) {
    return a * b;
}

let num = +prompt();
alert(num);