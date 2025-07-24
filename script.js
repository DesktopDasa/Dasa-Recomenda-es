document.addEventListener("DOMContentLoaded", function () {
  // Mostrar/Ocultar mais séries
  const botaoVerMais = document.getElementById("botao-ver-mais");
  const maisSeries = document.querySelector(".mais-series");

  if (botaoVerMais && maisSeries) {
    botaoVerMais.addEventListener("click", function () {
      maisSeries.classList.toggle("mostrar");
      botaoVerMais.textContent = maisSeries.classList.contains("mostrar")
        ? "ver menos séries"
        : "ver mais séries";
    });
  }

  // Modal
  const abrirModal = document.getElementById("abrir-modal");
  const fecharModal = document.getElementById("fechar-modal");
  const modal = document.getElementById("modal-lista");
  const listaAdicionadas = document.getElementById("lista-adicionadas");

  if (abrirModal && fecharModal && modal) {
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
  }

  // Adicionar à lista (usando delegação de eventos para garantir funcionamento)
  const containerSeries = document.querySelector(".container-series");

  if (containerSeries) {
    containerSeries.addEventListener("click", (event) => {
      const botao = event.target;
      if (botao.classList.contains("botao-adicionar")) {
        const serie = botao.closest(".serie");
        if (!serie) return;

        const imagem = serie.querySelector("img")?.src || "";
        const titulo = serie.querySelector("h3")?.textContent || "";
        const descricao = serie.querySelector("p")?.textContent || "";

        const novaSerie = { imagem, titulo, descricao };

        let lista = JSON.parse(localStorage.getItem("listaSeries")) || [];
        lista.push(novaSerie);
        localStorage.setItem("listaSeries", JSON.stringify(lista));
        renderizarLista();
      }
    });
  }

  // Remover da lista
  function renderizarLista() {
    listaAdicionadas.innerHTML = "";

    let lista = JSON.parse(localStorage.getItem("listaSeries")) || [];

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

  // Inicializar lista ao carregar a página
  renderizarLista();
});
