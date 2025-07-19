document.addEventListener("DOMContentLoaded", function () {
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

  // Modal
  const abrirModal = document.getElementById("abrir-modal");
  const fecharModal = document.getElementById("fechar-modal");
  const modal = document.getElementById("modal-lista");
  const listaAdicionadas = document.getElementById("lista-adicionadas");

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

  // Adicionar à lista
  const botoesAdicionar = document.querySelectorAll(".botao-adicionar");

  botoesAdicionar.forEach(botao => {
    botao.addEventListener("click", () => {
      const serie = botao.closest(".serie");
      const imagem = serie.querySelector("img").src;
      const titulo = serie.querySelector("h3").textContent;
      const descricao = serie.querySelector("p").textContent;

      const dadosSerie = {
        imagem,
        titulo,
        descricao
      };

      // Salvar no localStorage
      let listaSalva = JSON.parse(localStorage.getItem("listaSeries")) || [];
      listaSalva.push(dadosSerie);
      localStorage.setItem("listaSeries", JSON.stringify(listaSalva));

      renderizarLista(); // Atualiza o modal
    });
  });

  function renderizarLista() {
    listaAdicionadas.innerHTML = ""; // Limpa antes de preencher

    const lista = JSON.parse(localStorage.getItem("listaSeries")) || [];

    lista.forEach((serie, index) => {
      const div = document.createElement("div");
      div.classList.add("serie");

      div.innerHTML = `
        <img src="${serie.imagem}" alt="${serie.titulo}">
        <h3>${serie.titulo}</h3>
        <p>${serie.descricao}</p>
      `;

      const botaoRemover = document.createElement("button");
      botaoRemover.textContent = "Remover";
      botaoRemover.classList.add("botao", "botao-remover");
      botaoRemover.addEventListener("click", () => {
        lista.splice(index, 1);
        localStorage.setItem("listaSeries", JSON.stringify(lista));
        renderizarLista();
      });

      div.appendChild(botaoRemover);
      listaAdicionadas.appendChild(div);
    });
  }

  // Exibir lista ao carregar página
  renderizarLista();
});
