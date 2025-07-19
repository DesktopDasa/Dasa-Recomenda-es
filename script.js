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
