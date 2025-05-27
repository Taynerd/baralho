const perguntas = [
"Qual seria um dia perfeito ao meu lado?",
"O que você mais gosta de fazer quando estamos juntos?",
"Tem algo que você sente falta de fazermos mais?",
"Qual programa simples te deixa mais feliz ao meu lado?",
"Você se sente presente quando estamos juntos?",
"Se pudesse escolher uma atividade nova para fazermos juntos, qual seria?",
"O que te faz sentir que tivemos um bom tempo juntos?",
"Você prefere programas tranquilos ou agitados comigo?",
"O que acha que poderíamos fazer para aproveitar mais nosso tempo juntos?",
"Qual foi o melhor final de semana que já passamos juntos?",
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
