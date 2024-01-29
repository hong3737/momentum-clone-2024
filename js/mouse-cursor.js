const cursor = document.querySelectorAll(".cursor");

function mouseMove(event) {
    const clientX = event.clientX + window.scrollX;
    const clientY = event.clientY + window.scrollY;

    cursor[0].style.top = `${clientY}px`;
    cursor[0].style.left = `${clientX}px`;

    setTimeout(() => {
        cursor[1].style.top = `${clientY}px`;
        cursor[1].style.left = `${clientX}px`;
        cursor[1].classList.add("v2");
    }, 100);
}
window.addEventListener("mousemove", mouseMove);
