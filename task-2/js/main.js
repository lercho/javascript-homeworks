let fraction1 = {
    numerator: 60,
    denominator: 225
}

let fraction2 = {
    numerator: 9,
    denominator: 4
}

function simplifyFraction(obj) {
    if (obj.numerator > obj.denominator) {
        for (let i = obj.denominator; i > 1; i--) {
            if (obj.numerator % i === 0 && obj.denominator % i === 0) {
                obj.numerator /= i;
                obj.denominator /= i;
            }
        }
    } else {
        for (let i = obj.numerator; i > 1; i--) {
            if (obj.numerator % i === 0 && obj.denominator % i === 0) {
                obj.numerator /= i;
                obj.denominator /= i;
            }
        }
    }
}

function addFractions(obj1, obj2) {
    let result = {};
    result.numerator = obj1.numerator * obj2.denominator + obj2.numerator * obj1.denominator;
    result.denominator = obj1.denominator * obj2.denominator;

    if (result.numerator > result.denominator) {
        for (let i = result.denominator; i > 1; i--) {
            if (result.numerator % i === 0 && result.denominator % i === 0) {
                result.numerator /= i;
                result.denominator /= i;
            }
        }
    } else {
        for (let i = result.numerator; i > 1; i--) {
            if (result.numerator % i === 0 && result.denominator % i === 0) {
                result.numerator /= i;
                result.denominator /= i;
            }
        }
    }
    return result;
}

function subtractFractions(obj1, obj2) {
    let result = {};
    result.numerator = obj1.numerator * obj2.denominator - obj2.numerator * obj1.denominator;
    result.denominator = obj1.denominator * obj2.denominator;
    if (result.numerator > result.denominator) {
        for (let i = result.denominator; i > 1; i--) {
            if (result.numerator % i === 0 && result.denominator % i === 0) {
                result.numerator /= i;
                result.denominator /= i;
            }
        }
    } else {
        for (let i = result.numerator; i > 1; i--) {
            if (result.numerator % i === 0 && result.denominator % i === 0) {
                result.numerator /= i;
                result.denominator /= i;
            }
        }
    }
    return result;
}

function multiplyFractions(obj1, obj2) {
    let result = {};
    result.numerator = obj1.numerator * obj2.numerator;
    result.denominator = obj1.denominator * obj2.denominator;
    if (result.numerator > result.denominator) {
        for (let i = result.denominator; i > 1; i--) {
            if (result.numerator % i === 0 && result.denominator % i === 0) {
                result.numerator /= i;
                result.denominator /= i;
            }
        }
    } else {
        for (let i = result.numerator; i > 1; i--) {
            if (result.numerator % i === 0 && result.denominator % i === 0) {
                result.numerator /= i;
                result.denominator /= i;
            }
        }
    }
    return result;
}

function divideFractions(obj1, obj2) {
    let result = {};
    result.numerator = obj1.numerator * obj2.denominator;
    result.denominator = obj1.denominator * obj2.numerator;
    if (result.numerator > result.denominator) {
        for (let i = result.denominator; i > 1; i--) {
            if (result.numerator % i === 0 && result.denominator % i === 0) {
                result.numerator /= i;
                result.denominator /= i;
            }
        }
    } else {
        for (let i = result.numerator; i > 1; i--) {
            if (result.numerator % i === 0 && result.denominator % i === 0) {
                result.numerator /= i;
                result.denominator /= i;
            }
        }
    }
    return result;
}

simplifyFraction(fraction1);
console.log(fraction1);

console.log(`${fraction1.numerator}/${fraction1.denominator} + ${fraction2.numerator}/${fraction2.denominator} = ${addFractions(fraction1, fraction2).numerator}/${addFractions(fraction1, fraction2).denominator}`);

console.log(`${fraction1.numerator}/${fraction1.denominator} - ${fraction2.numerator}/${fraction2.denominator} = ${subtractFractions(fraction1, fraction2).numerator}/${subtractFractions(fraction1, fraction2).denominator}`);

console.log(`${fraction1.numerator}/${fraction1.denominator} * ${fraction2.numerator}/${fraction2.denominator} = ${multiplyFractions(fraction1, fraction2).numerator}/${multiplyFractions(fraction1, fraction2).denominator}`);

console.log(`${fraction1.numerator}/${fraction1.denominator} / ${fraction2.numerator}/${fraction2.denominator} = ${divideFractions(fraction1, fraction2).numerator}/${divideFractions(fraction1, fraction2).denominator}`);

