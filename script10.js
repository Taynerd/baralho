const perguntas = [
"Como você cuida do seu bem-estar mental?",
"O que você gostaria de melhorar em nossa rotina juntos?",
"Tem algo na sua alimentação que gostaria de mudar?",
"Você se sente apoiado(a) por mim em relação à sua saúde?",
"Como podemos incluir mais hábitos saudáveis no nosso dia a dia?",
"Você sente que temos energia juntos para aproveitar a vida?",
"Qual é sua maior prioridade em relação à saúde atualmente?",
"Você tem alguma meta de bem-estar que gostaria que eu ajudasse?",
"O que te faz sentir mais leve no dia a dia?",
"Você se sente bem com seu corpo e estilo de vida?",
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
