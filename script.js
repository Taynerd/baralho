const perguntas = [
  "Qual foi sua primeira impressão sobre mim?",
  "O que você mais admira em mim?",
  "Qual foi o nosso momento mais marcante juntos?",
  "O que você acha que mais mudou em nós com o tempo?",
  "Tem algo que você gostaria que eu soubesse mas nunca disse?",
  "Qual hábito meu você ama?",
  "Se você pudesse reviver um dia nosso, qual seria?",
  "Como você descreveria nosso relacionamento em 3 palavras?",
  "Qual a lembrança mais engraçada que você tem da gente?",
  "Como você se sente quando estamos longe?"
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
