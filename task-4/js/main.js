let year = +prompt("Введите год");

if (isNaN(year) || year < 1) {
    alert("Это не год");
} else if (year % 400 == 0 || (year % 4 == 0 && (year % 100 != 0))) {
    alert("Это высокосный год!");
} else {
    alert("Это не высокосный год");
}