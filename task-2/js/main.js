// function findCommonFactor(num1, num2) {
//     let comFac = 1;
//     if (num1 > num2) {
//         for (let i = num2; i > 0; i--) {
//             if (num1 % i === 0 && num2 % i === 0) {
//                 comFac = i;
//                 break;
//             }
//         }   
//     } else {
//         for (let i = num1; i > 0; i--) {
//             if (num1 % i === 0 && num2 % i === 0) {
//                 comFac = i;
//                 break;
//             }
//         } 
//     }
//     return comFac;       
// }

// let number1 = 36;
// let number2 = 24;

// console.log(findCommonFactor(number1, number2));

// ------------------------



// function findCommonFactor(num1, num2) {
//     let comFact = num2;
//     if (num1 % comFact === 0 && num2 % comFact === 0) {
//         return comFact;
//     } else {
//         comFact--;
//         console.log(`num2 = ${num2}, comFact = ${comFact}`);
//         return findCommonFactor(num1, num2);
//     }
// }

// let number1 = 36;
// let number2 = 24;

// console.log(findCommonFactor(number1, number2));

// ==============================

// var gcd = function(a, b) { // 36, 24
//     if ( ! b) {
//         return a;
//     }
//     return gcd(b, a % b); // gcd(24, 36 % 24 == 5)
// };

// gcd(5, 24 % 5 == 4)
// gcd(4, 5 % 4 == 1)
//================================

let person = {
    name: "John",
    surname: "Smith",
    get fullName() {
        return `${this.name} ${this.surname}`
    },
    set fullName(value) {
        this.name = value.split(" ")[0];
        this.surname = value.split(" ")[1];
    }
}

person.fullName = "Jenn Vorches";

console.log(person.name) // Jenn