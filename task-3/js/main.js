// Написать функцию для поиска максимальной цифры в числе.

function findMaxDigit(num, i = 1, max = String(num)[0]) {
    if (i === String(num).length - 1) {
        return max;
    }
    if (Number(String(num)[i]) > max) {
        max = Number(String(num)[i]);
    } 
    return findMaxDigit(num, i + 1, max);
}

let number = 543523348532;

console.log(findMaxDigit(number));