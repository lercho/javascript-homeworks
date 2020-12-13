let num = +prompt("Введите число");
 
for (let i = 1; i <= 100; ++i) {
    if (i % num == 0) {
        console.log(i);
    }
}