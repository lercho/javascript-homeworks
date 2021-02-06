// Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру. Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том, что каждое число равно сумме двух предыдущих чисел. Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8.

function findFibonacci(num) {
    if (num < 1) {
        return 0;
    }  
    if (num === 1 || num === 2) {
        return 1;
    } else {
        return findFibonacci(num - 1) + findFibonacci(num - 2);
    }
}

console.log(findFibonacci(7));