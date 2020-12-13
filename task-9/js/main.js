let score = 0;
let answer_1 = prompt("typeOf(null)");

if (answer_1 == "object") {
    alert("Правильно!");
    score += 4;
} else {
    alert("Ответ неправильный");
}

let answer_2 = prompt("Инструкция, позволяющяя многократно повторять выполнение блока кода, который зависит от определённого условия");

if (answer_2 == "цикл" || answer_2 == "Цикл") {
    alert("Правильно!");
    score += 4;
} else {
    alert("Ответ неправильный");
}

let answer_3 = prompt("Задание значения переменной при её создании");

if (answer_3 == "инициализация" || answer_3 == "Инициализация") {
    alert("Правильно!");
    score += 4;
} else {
    alert("Ответ неправильный");
}

alert("Ваш балл: " + score + " из 12");