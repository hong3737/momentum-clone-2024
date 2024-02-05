const aside_close = document.querySelector(".aside-close");
const aside = document.querySelector("aside");

aside_close.addEventListener("click", () => aside.classList.toggle("hide"));

// search-url="https://www.google.com/search?q="
// earch-url="https://www.bing.com/search?q=

document.getElementById("dark-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
