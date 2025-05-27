const perguntas = [
"Tem algo que você não toleraria em um relacionamento?",
"O que é inegociável para você em um(a) parceiro(a)?",
"Você sente que respeitamos os limites um do outro?",
"Temos valores compatíveis? Em que você percebe isso?",
"Existe alguma diferença entre nós que te preocupa?",
"Você já se sentiu desconfortável em alguma situação comigo?",
"Quais são seus principais limites emocionais?",
"Como podemos lidar melhor com nossas diferenças?",
"Até que ponto você acredita em ceder em prol do relacionamento?",
"Quais atitudes minhas demonstram respeito por você?",
];

const opcoes = document.querySelectorAll(".option");
const overlay = document.getElementById("overlay");
const perguntaExpandida = document.getElementById("perguntaExpandida");
const fecharBtn = document.getElementById("fechar");

opcoes.forEach(opcao => {
  opcao.addEventListener("click", () => {
    const index = parseInt(opcao.dataset.index);
    perguntaExpandida.textContent = perguntas[index];
    overlay.classList.remove("hidden");
  });
});

fecharBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});
