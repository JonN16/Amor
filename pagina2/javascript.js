botao = document.getElementById("botao");
comeco = document.getElementById("comeco");
texto1 = "Vamos ver um pouco das coisas que a gente fez junto, momo: Linha do Tempo - Namorados";
h1 = document.getElementById("h1");
const audio = document.getElementById("minhaMusica");

function digitarTexto(elemento, texto, velocidade, callback) {
    let index = 0;
    const intervalo = setInterval(() => {
        if (index < texto.length) {
            elemento.innerHTML += texto[index];
            index++;
        } else {
            clearInterval(intervalo);
            if (callback) callback();
        }
    }, velocidade);
}

botao.addEventListener("click", function () {
    audio.play(); 
    comeco.remove();
    botao.remove();

    digitarTexto(h1, texto1, 100, () => {
        const meio = document.getElementById("meio");

        if (!meio) {
            console.error('Elemento #meio não encontrado.');
            return;
        }

        const listaLinhas = [
            {
                mes: "Março",
                texto: "Março foi onde tudo começou. Eu não sei você, amor, mas eu não tinha muitos planos e nem muitas expectativas. Mas, que bom que, no fim, tudo deu certo! Momo, esse foi um grande começo para algo incrível.",
                cor: "#41516C",
                img: "../img/março.gif"
            },
            {
                mes: "Abril",
                texto: "Abril não teve tantas coisas marcantes, mas teve aquela parte no gif do nosso filho... Eu não gostava tanto dele, mas eu era amargurado e ainda estava fechado para você. Mas, aos poucos, fui me abrindo cada vez mais e hoje eu cuidaria melhor dele, minha vida.",
                cor: "#FBCA3E",
                img: "../img/abril.gif"
            },
            {
                mes: "Maio",
                texto: "Maio, o aniversário do Felipe onde nos encontramos com nossos amigos. Quando eu te vi lá, estava morrendo de vergonha jogando truco, eu dançando, nós na piscina. Foi nosso primeiro evento de casal juntos. Tem até aquele vídeo de 20 minutos muito fofo nosso, meu amor.",
                cor: "#E24A68",
                img: "../img/maio.gif"
            },
            {
                mes: "Junho",
                texto: "Junho foi o mês em que a greve começou, e a partir daí começamos a ir para a escola para nos vermos e eu ir treinar. Você ficou mais próxima do Rafael Dominicano, e a gente ficou cada vez mais juntos. Nosso filho também chegou, e achamos ele muito lindo, o nenê. Agora você só xinga ele. Também lembro de um momento em que você me deixou esperando o dia inteiro, kkkkkk. Meu nenê lindo. Tiveram também a festa junina juntos, nossa primeira de várias. Até a festa da Fernanda, foi muita coisa, até de ladinho papai, amor. Aconteceu bastante coisa esse mês.",
                cor: "#1B5F8C",
                img: "../img/junho.gif"
            },
            {
                mes: "Julho",
                texto: "O mês de julho foi muito especial, pois o amor da minha vida nasceu, e eu também nasci nesse mês (mas isso é irrelevante). As aulas voltaram com tudo, e nós dois sempre ocupados, mas sempre juntos. Beijinhos e abraços. O primeiro pedaço do bolo vai para você, meu amor e sempre será.",
                cor: "#4CADAD",
                img: "../img/julho.gif"
            },
            {
                mes: "Agosto",
                texto: "Mês de agosto, onde passamos mais um tempo distante, mas nunca separados. Você no Grêmio, foi neste mês ou no final do mês passado? Só queria dizer que você é incrível, e o Grêmio tem sorte de ter você, uma menina cheia de arte e histórias para acrescentar à escola. Você é incrível, a líder que o Grêmio precisa.",
                cor: "#FF5733",
                img: "../img/agosto.gif"
            },
            {
                mes: "Setembro",
                texto: "Resumiu-se em academia e escola. Você teve seu trabalho de química, e eu, uma dor de cabeça com o jogo do pato, que foi decepcionante. Minha memória é bem ruim, então não lembro de muita coisa. Você entrou na academia e começou a ficar fitness, mas para mim, você sempre foi perfeita é mais bela saúde.",
                cor: "#900C3F",
                img: "../img/setembro.gif"
            },
            {
                mes: "Outubro",
                texto: "Jogando em call, você mais feliz com a academia, seu RPG, seu the sims que nunca jogou de novo e algo que nunca muda: nós sempre juntos, nos amando. Não importa as brigas ou intrigas, estamos sempre unidos. Eu amo muito você.",
                cor: "#9C27B0",
                img: "../img/outubro.gif"
            },
            {
                mes: "Novembro",
                texto: "Cada vez mais perto do final do ano, você vindo aqui em casa, conhecendo meus parentes, ficando mais próxima da minha família. Já começo a pensar nesse site aqui para voce meu amor, meu amor. Tanto tempo juntos, o ano acabando, e cada vez mais perto de completarmos um ano juntos. Mas vai resetar depois de hoje, não é mesmo, meu amor? Ano que vem será difícil para mim, com muita ansiedade e desafios, mas se você continuar ao meu lado, eu fico muito feliz.",
                cor: "#00BCD4",
                img: "../img/novembro.gif"
            },
            {
                mes: "Dezembro",
                texto: "Continua só que diferente...",
                cor: "#4CAF50",
                img: "../img/dezembro.jpg"
            }
        ];

       
        function adicionarLinhaPorLinha(linhas, elemento, intervalo) {
            let index = 0;
        
            function adicionarProximo() {
                if (index < linhas.length) {
                    const mesInfo = linhas[index];
                    const linhaHTML = `
                        <li style="--accent-color:${mesInfo.cor}">
                            <div class="date">${mesInfo.mes}</div>
                            <div class="title">${mesInfo.mes}</div>
                            <img src="${mesInfo.img}" alt="${mesInfo.mes}" class="imagem-mes">
                            <div class="descr" id="descr-${mesInfo.mes.toLowerCase()}"></div>
                        </li>`;
                    elemento.innerHTML += linhaHTML;
        
                    const imgElemento = elemento.querySelector(`img[src="${mesInfo.img}"]`);
                    if (imgElemento) {
                        imgElemento.addEventListener("click", () => {
                            imgElemento.classList.toggle("crescer");
                        });
                    }
        
                    const descrElemento = document.getElementById(`descr-${mesInfo.mes.toLowerCase()}`);
                    digitarTexto(descrElemento, mesInfo.texto, 1, () => {
                        index++;
                        setTimeout(adicionarProximo, intervalo); 
                    });
                } else {

                    const botaoFinal = document.createElement("button");
                    botaoFinal.textContent = "Clique para continuar";
                    botaoFinal.id = "botaoFinal";
                    botaoFinal.classList.add("botao");
                    document.body.appendChild(botaoFinal);

                    botaoFinal.addEventListener("click", () => {

                        window.location.href = '../pagina3/index.html'; 
                       
                    });
                }
            }
            adicionarProximo();
        }

        adicionarLinhaPorLinha(listaLinhas, meio, 2000);

        function criarQuadrado() {
            const alturaSite = document.body.scrollHeight;
            const duracaoQueda = Math.max(3, alturaSite / 100);
            const limiteCorações = 50 + Math.floor(duracaoQueda * 1.4);
            const quadradosExistentes = document.querySelectorAll('.quadrado').length;

            if (quadradosExistentes < limiteCorações) {
                const quadrado = document.createElement('div');
                quadrado.classList.add('quadrado');
                quadrado.style.left = `${Math.random() * 98}vw`;
                quadrado.style.top = `${Math.random() * 5}vh`;

                document.body.appendChild(quadrado);
                quadrado.style.setProperty('--altura-site', `${alturaSite}px`);
                quadrado.style.animation = `cair-dinamico ${duracaoQueda}s linear`;

                quadrado.addEventListener('animationend', () => quadrado.remove());
            }
        }

        // Atualizar altura dos quadrados
        function atualizarAlturaQuadrados() {
            const alturaSite = document.body.scrollHeight;
            document.querySelectorAll('.quadrado').forEach(quadrado => {
                quadrado.style.setProperty('--altura-site', `${alturaSite}px`);
            });
        }

        // Intervalos regulares
        setInterval(criarQuadrado, 300);
        setInterval(atualizarAlturaQuadrados, 200);
    });
});
