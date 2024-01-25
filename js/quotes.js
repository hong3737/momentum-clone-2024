const quotes = [
    {
        quote: "Learning to love yourself is the greatest love of all",
        author: "Michael Masser",
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value",
        author: "Albert Einstein",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author: "Nelson Mandela",
    },
    {
        quote: "The only thing we have to fear is fear itself",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "When you have faults, do not fear to abandon them",
        author: "Confucius",
    },
    {
        quote: "This too shall pass",
        author: "Et hoc transibit",
    },
    {
        quote: "Despite the forecast, live like it’s spring",
        author: "Lilly Pulitzer",
    },
    {
        quote: "Only I can change me life, no one can do it for me",
        author: "Carol Burnett",
    },
    {
        quote: "Being happy never goes out of style",
        author: "Lilly Pulitzer",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all",
        author: "Oscar Wilde",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;