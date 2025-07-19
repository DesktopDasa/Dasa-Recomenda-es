const botao = document.querySelector("button");
const maisSeries = document.querySelector(".mais-series");

botao.addEventListener("click", function () {
    if (maisSeries.classList.contains("mostrar")) {
        maisSeries.classList.remove("mostrar");
        botao.textContent = "ver mais séries";
    } else {
        maisSeries.classList.add("mostrar");
        botao.textContent = "ver menos séries";
    }
});