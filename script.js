const btn = document.getElementById("openBtn");
const container = document.querySelector(".container");
const wish = document.getElementById("wish");
const typing = document.getElementById("typing");

const text = `
Semoga selalu sehat.

Panjang umur.

Bahagia selalu.
 LUVV❤️

`;

btn.onclick = () => {

    container.style.display = "none";
    wish.classList.remove("hidden");

    typing.innerHTML = "";

    let i = 0;

    const interval = setInterval(() => {

        typing.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(interval);

        }

    },40);

};