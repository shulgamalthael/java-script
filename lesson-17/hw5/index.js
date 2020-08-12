const formatSeconds = seconds => {
    if (seconds < 10) {
        return `0${seconds}`
    }
    return seconds;
};
const timer = {
    minsPassed: 0,
    secondsPassed: 0,
    idInterval: null,
    startTimer() {
        this.idInterval = setInterval(() => {
            this.secondsPassed += 1;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 1000);
    },
    stopTimer() {
        clearInterval(this.idInterval);
        this.idInterval = null;
    },
    resetTimer() {
        this.stopTimer();
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
    getTime() {
        const formattedSeconds = formatSeconds(this.secondsPassed);
        return `${this.minsPassed}:${formattedSeconds}`;
    }
};

timer.startTimer();
timer.getTime();