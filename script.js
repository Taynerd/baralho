const perguntas = [
"Qual foi o momento mais marcante que vivemos juntos?",
"O que você mais admira em mim?",
"Quando você percebeu que estava apaixonado(a)?",
"O que mudou em sua vida desde que começamos a nos relacionar?",
"O que representa o nosso relacionamento para você?",
"Qual foi o nosso encontro mais inesquecível?",
"Você sente que somos parceiros em tudo? Por quê?",
"Qual hábito meu te faz se sentir mais amado(a)?",
"Tem algo que você gostaria de fazer juntos e ainda não fizemos?",
"Qual é a sua lembrança favorita de nós dois?",
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
