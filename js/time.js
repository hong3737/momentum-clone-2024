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

//디데이 계산, today
function d_dayCount(event) {
    event.preventDefault();
    const d_day = document.querySelector("#d-day input[type='date']").value;
    const today = new Date();
    const d_date = new Date(d_day);
    const d_diff = d_date.getTime() - today.getTime();

    const d_diffDate = Math.ceil(d_diff / (1000 * 60 * 60 * 24));
    const d_diffHour = Math.floor(d_diff / (1000 * 60 * 60)) % 24;
    const d_diffMin = Math.floor(d_diff / (1000 * 60)) % 60;
    const d_diffSec = Math.floor(d_diff / 1000) % 60;

    const dDayBox = document.createElement("div");
    const dDaySpan = document.createElement("span");
    const dDayDel = document.createElement("button");

    dDayBox.classList.add("d-day__box", "v2");
    dDaySpan.classList.add("d-day__item");
    dDayDel.classList.add("btn__close");

    dDayBox.innerText = `${d_date.getFullYear()}-${
        d_date.getMonth() + 1
    }-${d_date.getDate()}`;
    dDaySpan.innerText = `${d_diffDate}d ${d_diffHour}h ${d_diffMin}m ${d_diffSec}s`;

    dDayBox.append(dDaySpan, dDayDel);
    document.querySelector(".d-day__items").append(dDayBox);
}
// if (d_diff <= 0) {
//     clearInterval();
// }
// setInterval(d_dayCount, 1000);

document.getElementById("d-day").addEventListener("submit", d_dayCount);

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
