let car = {
    manufacturer: "Hyundai",
    model: "i30",
    year: "2011",
    avSpeed: "100",
    showInfo() {
        alert("Производитель: " + this.manufacturer + "\nМодель: " + this.model + "\nГод: " + this.year + "\nСредняя скорость: " + this.avSpeed)
    },
    calcTime(d) {
        let time = d / this.avSpeed;
        let timeF = time;
        for (let i = 4; i < time; i += 4) {
            timeF += 1;
        }
        return timeF;
    }
}

alert("Показать информацию об автомобиле?");
car.showInfo();

let dist = +prompt("Введите расстояние");
alert("Потребуется " + car.calcTime(dist) + " ч. на преодоление указанного расстояния на данном автомобиле")