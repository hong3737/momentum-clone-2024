const images = [
    "random-img1.jpg",
    "random-img5.jpg",
    "random-img6.jpg",
    "random-img7.jpg",
];

function paintImg() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const main = document.querySelector("main");
    const bgImageBox = document.createElement("div");
    const bgImage = document.createElement("img");

    bgImageBox.classList.add("random-img");
    bgImage.src = `img/${chosenImage}`;
    bgImageBox.append(bgImage);
    main.appendChild(bgImageBox);
}

for (index = 0; index < 2; index++) {
    paintImg();
}
