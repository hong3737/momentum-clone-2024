const clock = document.querySelector("#clock");

//시계
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//only 디데이 계산
const today = new Date();
const dDay = new Date("2024-01-28");

today.setHours(0, 0, 0, 0);
dDay.setHours(0, 0, 0, 0);

const timeDifference = dDay - today;
const oneDay = 24 * 60 * 60 * 1000;

const daysPassed = Math.floor(timeDifference / oneDay);

// document.getElementById("dDay").textContent = `${dDay.toLocaleDateString()}`;
// document.getElementById("today").textContent = `${today.toLocaleDateString()}`;
// document.getElementById("countdown").textContent = `${daysPassed}일`;

console.log(daysPassed);

//분,초 카운트다운
function timeOut() {
    const time = 600;
    const min = "";
    const sec = "";

    min = parseInt(time / 60); //몫
    sec = time % 60; //나머지

    if (time < 0) {
        clearInterval();
    }
}

//btn.addEventListener(setInterval(timeOut, 1000));
