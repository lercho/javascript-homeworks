let num = +prompt("Введите число");
let pow = +prompt("Введите степень");
let result = 1;

let i = 1; 

while (i <= pow) {
    result = result * num; 
    i++;
}

alert(result);