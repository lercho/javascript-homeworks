const EUR = 0.83;
const GBP = 0.75;
const UAH = 28.7;

let number = +prompt("Введите сумму в долларах США");
let currency;

if (isNaN(number) || number < 0) {
    alert("Это неправильная сумма");
} else {
    currency = prompt("Введите валюту (евро, фунт или гривна)");
    switch (currency) {
        case "евро":
            alert("Ваша сумма в евро: " + number * EUR);
            break;
        case "фунт":
            alert("Ваша сумма в фунтах: " + number * GBP);
            break;
        case "гривна":
            alert("Ваша сумма в гривнах: " + number * UAH);
            break;
        default:
            alert("Неверная валюта");
    }
}