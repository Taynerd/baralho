const perguntas = [
"O que significa compromisso para você?",
"Você sente que somos uma equipe?",
"Como demonstra seu respeito por mim no dia a dia?",
"Existe algo que te faria repensar nossa relação?",
"Você se sente valorizado(a) por mim?",
"O que mais fortalece nosso compromisso?",
"Quais atitudes minhas te mostram lealdade?",
"Você sente que evoluímos juntos?",
"Tem algo que poderia te fazer confiar ainda mais em mim?",
"Como você percebe que sou comprometido(a) com você?",
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
