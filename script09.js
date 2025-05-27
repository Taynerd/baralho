const perguntas = [
"Existe alguma dor do passado que você ainda carrega?",
"Como posso te ajudar a se sentir mais seguro(a)?",
"Você já foi muito ferido(a) em outro relacionamento?",
"Tem algo que você evita por medo de se machucar?",
"Você consegue confiar com facilidade? Por quê?",
"Tem alguma situação que ainda precisa de cura?",
"Como lida com sentimentos difíceis no relacionamento?",
"O que mais te magoou em um relacionamento anterior?",
"Qual sua maior insegurança em um relacionamento?",
"O que te ajuda a superar frustrações emocionais?",
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
