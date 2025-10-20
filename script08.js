const perguntas = [
"Você se sente à vontade para me contar suas fantasias?",
"O que mais desperta o seu desejo durante nossos momentos juntos?",
"Tem algo que você sempre quis experimentar comigo, mas ainda não teve coragem de sugerir?",
"Você prefere que a iniciativa venha mais de mim ou gosta de tomar o controle?",
"Você traria uma terceira pessoa desconhecida para um menage?",
"Você se considera mais romântico(a) ou mais intenso(a) nos momentos íntimos?",
"Você acha que sentiria prazer me vendo transando com outra pessoa?",
"Você gosta mais de ritmo lento e envolvente ou de algo mais intenso e rápido?",
"Qual sua posição favorita (ELE perguntando); Em qual posição você mais gosta de transar comigo (ELA perguntando)",
"Você gosta quando eu te provoco fora do quarto, só pra criar clima?",
"O que torna uma transa realmente inesquecível pra você?",
"Pensar em um sexo mais agressivo te gera tesão ou medo?",
"Qual parte do meu corpo mais te atrai?",
"Você gosta quando fte xingo durante o sexo?",
"Tem algo que te deixa desconfortável na intimidade e que deveríamos conversar sobre?",
"Você se sente com tesão ao me ouvir gemendo?",
"Você se sente livre para me pedir o que quer na cama?",
"Como você lida com a timidez ou insegurança nesses momentos?",
"Caso goste que te xingue, qual xingamento mais te excita",
"Você gosta mais quando é planejado ou quando acontece de forma espontânea?",
"O que te faz entrar no clima mais rápido: palavras, toques ou olhares?",
"Você gosta quando eu assumo o comando ou prefere estar no controle?",
"Tem alguma fantasia que gostaria de realizar comigo?",
"Você gosta de testar seus limites?",
"Qual lugar, que ainda não transamos, que iria gostar de transar?",
"Você usaria uma fantasia? qual?",
"O que significa química pra você entre quatro paredes?",
"Você se sente à vontade para rir ou brincar durante o momento íntimo?",
"Você faria uma dupla penetração?",
"Você gosta de explorar coisas novas ou prefere o que já conhece bem?",
"Você gosta de apanhar? De leve ou mais intenso?",
"Você gosta de quando a luz está apagada ou prefere ver tudo acontecendo?",
"O que te faz sentir mais desejado(a)?",
"Você gosta quando existe um pouco de provocação antes do toque?",
"Você acredita que a confiança é o que mais torna a experiência prazerosa?",
"Você prefere as rapidinhas ou um sexo mais trabalhado",
"Você estaria disposto(a) a fazer algo que não curte tanto se eu disser que me excita muito?",
"Você acha que eu gozo rápido?",
"O nosso tempo de sexo é suficiente pra você ou gostaria que durasse mais?",
"Você acha que eu me interesso em te satisfazer ou acabo indo no modo automático?",
"Você gosta quando eu tomo a iniciativa de te surpreender?",
"Iria gostar se eu chegasse te chupando 'do nada' ou prefere criar um clima antes",
"Você acha que intimidade é mais sobre entrega física ou emocional?",
"O que te faz sentir mais conectado(a) a mim nesses momentos?",
"O sexo anal é tão prazeroso quanto o vaginal pra você, ou nâo?",
"Você sente que temos uma boa sintonia no desejo?",
"Qual tipo de clima te deixa mais à vontade: romântico, divertido ou provocante?",
"Com que tipo de roupa você gosta de me ver para se sentir com tesão",
"Você gosta quando a gente se provoca durante o dia pra criar expectativa?",
"Em qual posição você acha que nossa transa melhor satisfaz a ambos?"
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
