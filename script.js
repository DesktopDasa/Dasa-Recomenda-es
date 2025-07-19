// Mostrar/Ocultar mais séries
const botaoVerMais = document.getElementById("botao-ver-mais");
const maisSeries = document.querySelector(".mais-series");

botaoVerMais.addEventListener("click", function () {
    if (maisSeries.classList.contains("mostrar")) {
        maisSeries.classList.remove("mostrar");
        botaoVerMais.textContent = "ver mais séries";
    } else {
        maisSeries.classList.add("mostrar");
        botaoVerMais.textContent = "ver menos séries";
    }
});

// Modal (lista de séries)
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

// Adicionar série à lista
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

    // Cria botão de remover
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("botao", "botao-remover");

    // Evento de remoção
    botaoRemover.addEventListener("click", () => {
      copiaSerie.remove();
    });

    copiaSerie.appendChild(botaoRemover);
    listaAdicionadas.appendChild(copiaSerie);
  });
});
