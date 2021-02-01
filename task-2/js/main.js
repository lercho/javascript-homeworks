function findCommonFactor(num1, num2) {
    let comFac = 1;
    if (num1 > num2) {
        for (let i = num2; i > 0; i--) {
            if (num1 % i === 0 && num2 % i === 0) {
                comFac = i;
                break;
            }
        }   
    } else {
        for (let i = num1; i > 0; i--) {
            if (num1 % i === 0 && num2 % i === 0) {
                comFac = i;
                break;
            }
        } 
    }
    return comFac;       
}

let number1 = 36;
let number2 = 48;

console.log(findCommonFactor(number1, number2));

// ------------------------

function findCommonFactor(num1, num2) {
    let comFac;
    if (num1 % i === 0 && num2 % i === 0) {
        comFac = i;
        return comFac;
    } else if (num1 > num2) {
        return findCommonFactor(num1, num2 - 1);
    } else {
        return findCommonFactor(num1 - 1, num2);
    }
}