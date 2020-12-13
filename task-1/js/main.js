let age = +prompt("Введите возраст");
if (isNaN(age)) {
    alert("Это не число");
} else if (age < 0) {
    alert("Вы ещё не родились :)");
} else if (age >= 0 && age <= 2) {
    alert("Вы ребёнок");
} else if (age > 2 && age <= 12) {
    alert("Вы никто");
} else if (age > 12 && age < 18) {
    alert("Вы подросток");
} else if (age >= 18 && age <= 60) {
    alert("Вы взрослый");
} else if (age > 60 && age <= 120) {
    alert("Вы пенсионер");
} else {
    alert("Вы вампир");
}