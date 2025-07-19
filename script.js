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

      // Pega os dados da série
      const imagem = serie.querySelector("img").src;
      const titulo = serie.querySelector("h3").textContent;
      const descricao = serie.querySelector("p").textContent;

      // Cria objeto com os dados
      const dadosSerie = {
        imagem: imagem,
        titulo: titulo,
        descricao: descricao
      };

      // 1. Pega a lista atual (ou cria uma nova lista)
      let listaSalva = JSON.parse(localStorage.getItem("listaSeries")) || [];

      // 2. Adiciona a nova série
      listaSalva.push(dadosSerie);

      // 3. Salva de novo no localStorage
      localStorage.setItem("listaSeries", JSON.stringify(listaSalva));

      // Cria botão de remover
      const botaoRemover = document.createElement("button");
      botaoRemover.textContent = "Remover";
      botaoRemover.classList.add("botao", "botao-remover");

      // Evento de remoção
      botaoRemover.addEventListener("click", () => {
        copiaSerie.remove();
      });

      copiaSerie.appendCh
