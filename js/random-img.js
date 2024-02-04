const images = [
    "random-img1.jpg",
    "random-img5.jpg",
    "random-img6.jpg",
    "random-img7.jpg",
];

const dragArea = document.querySelector("#drags");
// let dragItem;
// let active = false;
// let currentX;
// let currentY;
// let initialX = {};
// let initialY = {};
// let xOffset = {};
// let yOffset = {};

// dragArea.addEventListener("mousedown", dragStart);
// dragArea.addEventListener("mouseup", dragEnd);
// dragArea.addEventListener("mousemove", drag);

// function dragStart(e) {
//     let indexId = e.target.parentElement.id;
//     xOffset = 0;
//     yOffset = 0;
//     dragItem = e.target.parentElement;
//     console.dir(dragItem);

//     initialX[e.target.parentElement.id] = e.clientX;
//     initialY[e.target.parentElement.id] = e.clientY;

//     // console.log("ddd" + String(e.clientX - xOffset));
//     console.log(initialX);
//     console.log(initialY);

//     if (indexId.includes("drag")) {
//         console.log("hihi" + indexId);
//         active = true;
//     }
// }

// function dragEnd(e) {
//     console.dir(e);
//     active = false;
// }

// function drag(e) {
//     console.log(active);

//     if (active) {
//         e.preventDefault();

//         console.log(e);
//         console.log(e.target.parentElement.id);

//         currentX = e.clientX - initialX[e.target.parentElement.id];
//         currentY = e.clientY - initialY[e.target.parentElement.id];
//         console.log(currentX, currentY);

//         xOffset = currentX;
//         yOffset = currentY;
//         setTranslate(currentX, currentY, dragItem);
//     }
// }

// function setTranslate(xPos, yPos, el) {
//     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
// }

function paintImg(index) {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const bgImageBox = document.createElement("div");
    const bgImage = document.createElement("img");

    bgImageBox.id = `drag${index}`;
    // bgImageBox.id = index;
    bgImageBox.classList.add("random-img");
    bgImage.src = `img/${chosenImage}`;
    bgImageBox.append(bgImage);

    dragArea.appendChild(bgImageBox);
}

for (index = 0; index < 2; index++) {
    paintImg(index);
}
