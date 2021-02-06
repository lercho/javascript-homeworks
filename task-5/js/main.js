// Написать функцию для вывода всех множителей переданного числа в возрастающем порядке. Например: число 18 – множители 2 * 3 * 3.

function showFactors(num, numtemp = num, i = 2, factors = []) {
    if (numtemp === 1) {
        return factors;
    } else if (numtemp % i === 0) {
        factors.push(i);
        numtemp /= i;
        return showFactors(num, numtemp, i, factors);
    } else {
        return showFactors(num, numtemp, i + 1, factors);
    }
}

console.log(showFactors(18));