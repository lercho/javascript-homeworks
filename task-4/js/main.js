// Написать функцию, которая определяет простое ли переданное число.

function isSimple(num, i = 2, result = true) {
    console.log(`num = ${num}, i = ${i}, result = ${result}`)
    if (result === false || i === num) {
        return result;
    } else if (num % i === 0) {
        result = false;
    }
    return isSimple(num, i + 1, result);
}

let number = 13;

console.log(isSimple(number));