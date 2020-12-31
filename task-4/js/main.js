function checkNum (a) {
    if (typeof(a) != "number" || isNaN(a) || a < 0) {
        return false;
    } else {
        return true;
    }
}

function rectangleArea(a, b) {
    if (a == 0 && b == 0) {
        throw "Неверная длина и ширина"
    } else if (a == 0) {
        return b * b;
    } else if (b == 0) {
        return a * a;
    } else {
        return a * b;
    }
}

let num1;
let num2;

while (checkNum (num1) == false) {
    num1 = +prompt("Введите длину");
}

while (checkNum (num2) == false) {
    num2 = +prompt("Введите ширину");
}

alert("Площадь прямоугольника: " + rectangleArea(num1, num2));