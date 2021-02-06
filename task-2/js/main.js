// Написать функцию поиска наибольшего общего делителя.

function findLargestFactor(num1, num2, currentnum = num1) {
    if (num1 % currentnum === 0 && num2 % currentnum === 0) {
        return currentnum;
    } else {
        return findLargestFactor(num1, num2, currentnum - 1)
    }
}

number1 = +prompt("");
number2 = 33;

console.log(findLargestFactor(number1, number2,));