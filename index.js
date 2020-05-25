let quotesDiv = document.querySelector("#quotes");

fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(quote => {
        console.log(quote);
        quotesDiv.innerHTML += `<p>${quote.quote}</p>`;
    });

let catButton = document.querySelector("#give-cat");
let catDiv = document.querySelector("#cat-pic");
catButton.addEventListener("click", evt => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(kitty => {
            console.log(kitty);
            catDiv.innerHTML = `
            <p> Here is a nice kitty </p>
            <img src=${kitty[0].url} height="250" width="250">`;
        });
});
