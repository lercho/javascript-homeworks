let num = 1000;
let i = 0;

do {
    num = num / 2;
    ++i;
} while (num > 50);
 
alert("Итог: " + num + "\nКоличество делений: " + i);