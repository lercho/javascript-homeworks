let day;
let month;
let year;

let resultDay;
let resultMonth;
let resultYear;

let noSuchDayError = 0;

day = +prompt("Введите день");
if (isNaN(day) || day < 1 || day > 31) {
    alert("Это неправильный день месяца")
} else {
    month = +prompt("Введите месяц (цифрой)");
    if (isNaN(month) || month < 1 || month > 12) {
        alert("Это неправильный номер месяца")
    } else {
        year = +prompt("Введите год");
        if (isNaN(year) || year < 1) {
            alert("Это неправильный год")
        } else {
            resultDay = day;
            resultMonth = month;
            resultYear = year;

            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                    if (day == 31) {
                        resultDay = 1;
                        ++resultMonth;
                    } else {
                        ++resultDay;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    if (day == 31) {
                        ++noSuchDayError;
                    } else if (day == 30) {
                        resultDay = 1;
                        ++resultMonth;
                    } else {
                        ++resultDay;
                    }
                    break;
                case 2:
                    if (day == 31 || day == 30) {
                        ++noSuchDayError;
                    } else if (day == 29) {
                        if (year % 400 == 0 || (year % 4 == 0 && (year % 100 != 0))) {
                            resultDay = 1;
                            ++resultMonth;
                        } else {
                            ++noSuchDayError;
                        }
                    } else if (day == 28) {
                        if (year % 400 == 0 || (year % 4 == 0 && (year % 100 != 0))) {
                            ++resultDay;
                        } else {
                            resultDay = 1;
                            ++resultMonth;
                        }
                    } else {
                        ++resultDay;
                    }
                    break;
                case 12:
                    if (day == 31) {
                        resultDay = 1;
                        resultMonth = 1;
                        ++resultYear;
                    } else {
                        ++resultDay;
                    }
                    break;

            } 
            if (noSuchDayError > 0) {
                alert("В этом месяце нет " + day + " дня");
            } else {
                alert("Следующий день: " + resultDay + "." + resultMonth + "." + resultYear);
            }
        }
    }
}

