let cDiameter = +prompt("Введите длину окружности") / Math.PI;
let sqSide;

if (isNaN(cDiameter) || cDiameter < 0) {
    alert("Это неправильная длина");
} else {
    sqSide = +prompt("Введите периметр квадрата") / 4;
    if (isNaN(sqSide) || sqSide < 0) {
        alert("Это неправильная длина");
    } else if (sqSide >= cDiameter) {
        alert("Такая окружность может поместиться в квадрат!");
    } else {
        alert("Такая окружность не может поместиться в квадрат");
    }
}