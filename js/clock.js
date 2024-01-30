const clock = document.querySelector("#clock");
const hour = document.querySelector(".clock__hour");
const minute = document.querySelector(".clock__minute");
const second = document.querySelector(".clock__second");

console.log(hour);

function rotation(target, val) {
    target.style.transform = `rotate(${val}deg)`;
}

function getClock() {
    const date = new Date();
    // console = 15:21:09
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    // const hours = (date.getHours() % 12) + date.getMinutes() / 59; // 22 % 12 = 10pm
    // const minutes = date.getMinutes(); // 0 - 59
    // const seconds = date.getSeconds(); // 0 - 59

    // hours *= 30; // 12 * 30 = 360deg
    // minutes *= 6;
    // seconds *= 6; // 60 * 6 = 360deg

    // rotation(hour, h);
    // rotation(minute, m);
    // rotation(second, s);
}

getClock();
setInterval(getClock, 1000);
