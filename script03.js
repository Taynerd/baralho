const perguntas = [
"O que mais te excita durante o sexo?",
"Você se sente à vontade para expressar seus desejos comigo?",
"Tem alguma fantasia que gostaria de realizar comigo?",
"O que faz você se sentir mais conectado(a) comigo na intimidade?",
"Existe algo que podemos explorar mais juntos no sexo?",
"O que torna nossa vida sexual especial para você?",
"Tem algo que você gostaria de tentar e ainda não teve coragem?",
"O que você mais gosta nas nossas preliminares?",
"Como você se sente após uma noite íntima comigo?",
"Você se sente seguro(a) comigo durante o sexo? Por quê?",
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
