const perguntas = [
"O que mais te desperta desejo em mim?",
"Você se sente à vontade para inovar comigo na cama?",
"Tem alguma surpresa íntima que você gostaria de preparar?",
"Como podemos manter nossa conexão sexual sempre viva?",
"Você prefere intensidade ou delicadeza no sexo?",
"Qual foi nossa experiência mais memorável na cama?",
"Você tem alguma zona de prazer pouco explorada?",
"O que você mais deseja que eu faça durante o sexo?",
"Você já sonhou com algo picante entre nós?",
"Qual é a sua lembrança mais quente comigo?",
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
