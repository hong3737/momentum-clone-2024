const body = document.querySelector("body");
const colorArray = ["#F2E3D5", "#1e90ff", "#1562ad", "#fff59c"];
// const dropText = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

MIN_DURATION = 5;

function dropItems() {
    const dropItem = document.createElement("div");
    const randemIndex = Math.floor(Math.random() * colorArray.length);
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + MIN_DURATION;
    const randomOpcity = Math.random();

    // dropItem.innerText = dropText[randemIndex];
    dropItem.classList.add("drop-heart");
    dropItem.innerHTML = '<i class="fa-solid fa-heart"></i>';
    dropItem.style.scale = 1 + randomOpcity;
    dropItem.style.color = colorArray[randemIndex];
    dropItem.style.left = `${Math.random() * (window.screen.width - 30)}px`;
    dropItem.style.animationDelay = `${delay}s`;
    dropItem.style.opacity = randomOpcity;
    dropItem.style.animation = `drop ${duration}s linear`;

    body.appendChild(dropItem);

    setTimeout(() => {
        body.removeChild(dropItem);
        dropItems();
    }, (duration + delay) * 1000);
}
for (i = 1; i < 50; i++) {
    setTimeout(dropItems, 3000);
}
