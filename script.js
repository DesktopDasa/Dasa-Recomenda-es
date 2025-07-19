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
// Abrir e fechar o modal
const abrirModal = document.getElementById("abrir-modal");
const fecharModal = document.getElementById("fechar-modal");
const modal = document.getElementById("modal-lista");

abrirModal.addEventListener("click", () => {
  modal.style.display = "block";
});

fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
// Seleciona todos os botões "adicionar à lista"
const botoesAdicionar = document.querySelectorAll(".botao-adicionar");
const listaAdicionadas = document.getElementById("lista-adicionadas");

botoesAdicionar.forEach(botao => {
  botao.addEventListener("click", () => {
    const serie = botao.closest(".serie");
    const copiaSerie = serie.cloneNode(true);

    // Remove o botão "adicionar à lista" da cópia
    const botaoNaCopia = copiaSerie.querySelector(".botao-adicionar");
    if (botaoNaCopia) {
      botaoNaCopia.remove();
    }
// Cria um botão de remover
const botaoRemover = document.createElement("button");
botaoRemover.textContent = "Remover";
botaoRemover.classList.add("botao", "botao-remover");

// Adiciona o botão à série clonada
copiaSerie.appendChild(botaoRemover);

// Evento para remover a série quando clicar no botão
botaoRemover.addEventListener("click", () => {
  copiaSerie.remove();
});
    listaAdicionadas.appendChild(copiaSerie);
  });
});
// Botão "Ver mais séries"
const botaoVerMais = document.getElementById("botao-ver-mais");
const maisSeries = document.querySelector(".mais-series");

botaoVerMais.addEventListener("click", () => {
  maisSeries.style.display = "flex"; // ou "block" se quiser vertical
  botaoVerMais.style.display = "none";
});
