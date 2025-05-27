const perguntas = [
"Você se sente ouvido(a) por mim?",
"Como você prefere resolver conflitos?",
"O que mais ajuda você a se acalmar em uma discussão?",
"Tem algo que você gostaria que eu entendesse melhor sobre você?",
"Você sente que consegue ser sincero(a) comigo sem medo?",
"Como podemos melhorar nossa comunicação?",
"Você prefere conversar na hora do conflito ou esperar?",
"O que costuma gerar mais desentendimentos entre nós?",
"Qual é a sua maior dificuldade em brigas?",
"O que você mais valoriza em uma conversa difícil?",
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
