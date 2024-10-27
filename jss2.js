let minutes = 0, seconds = 0, milliseconds = 0, interval;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('lapsList');
const themeToggle = document.getElementById('themeToggle');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);
themeToggle.addEventListener('change', toggleTheme);

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        startStopBtn.textContent = 'Start';
    } else {
        interval = setInterval(startTimer, 10);
        startStopBtn.textContent = 'Pause';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    startStopBtn.textContent = 'Start';
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapsList.innerHTML = '';
}

function lap() {
    if (isRunning) {
        const lapTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapsList.appendChild(lapItem);
    }
}

function startTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = pad(minutes);
    secondsDisplay.textContent = pad(seconds);
    millisecondsDisplay.textContent = pad(milliseconds);
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function toggleTheme() {
    document.body.classList.toggle('dark', themeToggle.checked);
}
