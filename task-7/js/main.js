const DISCOUNT_1 = 0.03;
const DISCOUNT_2 = 0.05;
const DISCOUNT_3 = 0.07;

let number = +prompt("Введите сумму покупки");

if (isNaN(number) || number < 0) {
    alert("Это неправильная сумма");
} else if (number >= 0 && number < 200) {
    alert("Сумма к оплате: " + number);
} else if (number >= 200 && number < 300) {
    alert("Сумма к оплате: " + (number * (1 - DISCOUNT_1)));
} else if (number >= 300 && number < 500) {
    alert("Сумма к оплате: " + (number * (1 - DISCOUNT_2)));
} else if (number >= 500) {
    alert("Сумма к оплате: " + (number * (1 - DISCOUNT_3)));
}