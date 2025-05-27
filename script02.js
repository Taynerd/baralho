const perguntas = [
"Onde você se imagina comigo daqui a 5 anos?",
"Qual é o seu maior sonho que deseja realizar ao meu lado?",
"Você gostaria de construir uma família comigo?",
"Como imagina a nossa vida profissional no futuro?",
"Tem algo que você gostaria que planejássemos juntos este ano?",
"O que você valoriza mais ao construir um futuro a dois?",
"Qual lugar você sonha em viajarmos juntos?",
"Você acredita que temos objetivos parecidos?",
"O que mais te motiva a crescer como pessoa e parceiro(a)?",
"Se pudéssemos realizar um desejo juntos agora, qual seria?",
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
