let min = +prompt("Введите минимальное значение диапазона");
let max = +prompt("Введите максимальное значение диапазона");

for (let i = min + 3; i <= max; i += 4) {
    console.log(i);
}