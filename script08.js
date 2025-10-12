const perguntas = [
"Você se sente à vontade para me contar suas fantasias?",
"O que mais desperta o seu desejo durante nossos momentos juntos?",
"Tem algo que você sempre quis experimentar comigo, mas ainda não teve coragem de sugerir?",
"Você prefere que a iniciativa venha mais de mim ou gosta de tomar o controle?",
"O que te faz se sentir mais confiante na cama?",
"Você se considera mais romântico(a) ou mais intenso(a) nos momentos íntimos?",
"Tem alguma coisa que eu faço que te enlouquece?",
"Você gosta mais de ritmo lento e envolvente ou de algo mais intenso e rápido?",
"Como você gosta de ser tocado(a)?",
"Você gosta quando eu te provoco fora do quarto, só pra criar clima?",
"O que torna um momento íntimo realmente inesquecível pra você?",
"Você acredita que o desejo cresce com o tempo ou com a novidade?",
"Qual parte do meu corpo mais te atrai?",
"Você gosta quando falo o que quero durante o momento a dois?",
"Tem algo que te deixa desconfortável na intimidade e que deveríamos conversar sobre?",
"Você acha que conseguimos equilibrar carinho e desejo?",
"Você se sente livre para me pedir o que quer na cama?",
"Como você lida com a timidez ou insegurança nesses momentos?",
"Você acha que o clima importa tanto quanto o ato em si?",
"Você gosta mais quando é planejado ou quando acontece de forma espontânea?",
"O que te faz entrar no clima mais rápido: palavras, toques ou olhares?",
"Você gosta quando eu assumo o comando ou prefere estar no controle?",
"Tem alguma fantasia leve que gostaria de realizar comigo?",
"Você gosta quando criamos um clima antes de ir para o quarto?",
"Qual foi o momento mais marcante de intimidade entre nós?",
"Você acredita que a conexão emocional influencia o prazer físico?",
"O que significa química pra você entre quatro paredes?",
"Você se sente à vontade para rir ou brincar durante o momento íntimo?",
"O que você acha mais importante: intensidade, duração ou sintonia?",
"Você gosta de explorar coisas novas ou prefere o que já conhece bem?",
"Tem alguma música, ambiente ou cheiro que te ajuda a entrar no clima?",
"Você gosta de quando a luz está apagada ou prefere ver tudo acontecendo?",
"O que te faz sentir mais desejado(a)?",
"Você gosta quando existe um pouco de provocação antes do toque?",
"Você acredita que a confiança é o que mais torna a experiência prazerosa?",
"O que te faz sair da rotina entre quatro paredes?",
"Você acha que já descobrimos tudo o que podemos viver juntos?",
"Tem algo que eu poderia fazer mais para te deixar ainda mais à vontade?",
"Você acha que conseguimos equilibrar desejo e ternura?",
"Você prefere momentos longos e envolventes ou mais intensos e diretos?",
"Você gosta quando eu tomo a iniciativa de te surpreender?",
"Tem alguma forma de carinho que te faz perder o controle?",
"Você acha que intimidade é mais sobre entrega física ou emocional?",
"O que te faz sentir mais conectado(a) a mim nesses momentos?",
"Você gosta quando existe mistério e expectativa antes do toque?",
"Você sente que temos uma boa sintonia no desejo?",
"Qual tipo de clima te deixa mais à vontade: romântico, divertido ou provocante?",
"O que você acha que mais fortalece nossa conexão íntima?",
"Você gosta quando a gente se provoca durante o dia pra criar expectativa?",
"Qual o segredo, pra você, de manter o fogo aceso com o tempo?"
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
