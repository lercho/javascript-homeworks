let time = {
    hours: 4,
    minutes: 45,
    seconds: 15,
    showTime() {
        let result = "";
        if (this.hours < 10) {
            result += "0" + String(this.hours) + ":";
        } else {
            result += String(this.hours) + ":";
        }

        if (this.minutes < 10) {
            result += "0" + String(this.minutes) + ":";
        } else {
            result += String(this.minutes) + ":";
        }

        if (this.seconds < 10) {
            result += "0" + String(this.seconds);
        } else {
            result += String(this.seconds);
        }
        console.log(result)
    },
    addHours() {
        this.hours += +prompt("Введите часы");
    },
    addMinutes() {
        this.minutes += +prompt("Введите минуты");
        if (this.minutes > 59) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        }
    },
    addSeconds() {
        this.seconds += +prompt("Введите секунды");
        if (this.seconds > 59) {
            this.minutes += Math.floor(this.seconds / 60);
            if (this.minutes > 59) {
                this.hours += Math.floor(this.minutes / 60);
                this.minutes = this.minutes % 60;
            }
            this.seconds = this.seconds % 60;
        }
    }

}

time.showTime();

time.addHours();
time.showTime();

time.addMinutes();
time.showTime();

time.addSeconds();
time.showTime();