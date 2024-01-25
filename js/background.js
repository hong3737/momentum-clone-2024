const images = [
    "character.jpeg",
    "character2.jpeg",
    "colorful1.jpeg",
    "colorful4.jpeg",
    "desk2.jpeg",
    "vintage1.jpeg",
    "vintage2.jpeg",
    "vintage3.jpeg",
    "vintage5.jpg",
    "vintage6.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
