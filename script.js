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
const botoesAdicionar = document.querySelectorAll(".botao");
const listaSeries = document.querySelector(".lista-series");

botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", function (event) {
    event.preventDefault(); // impedir que o link recarregue a página

    const serie = this.closest(".serie");
    const copia = serie.cloneNode(true); // clona a série
    copia.querySelector(".botao").remove(); // remove o botão da cópia

    listaSeries.appendChild(copia); // adiciona à lista
  });
});
