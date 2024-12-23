const meio = document.getElementById("meio");
const botao = document.getElementById("botao")
const coracao = document.getElementById("botao-coracao")

const texto1 = "Olá querida Rafaela Santos de Sousa";
const texto2 = "Você deve estar achando muito bizarro o mongo do seu futuro namorado estar te mostrando isso";
const texto3 = "Mas acredite ele gosta muito de você e queria mostrar um pouco da arte dele para você e preparou algo especial para você"
const texto4 = "Então vamos começar momo"

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


coracao.addEventListener("click", function handler() {
    coracao.removeEventListener("click", handler);
    coracao.remove();
    digitarTexto(meio, texto1, 90, () => {
        meio.innerHTML += "<br>";
        digitarTexto(meio, texto2, 90, () => {
            meio.innerHTML += "<br>";
            digitarTexto(meio, texto3, 90, () => {
                meio.innerHTML += "<br>";
                digitarTexto(meio, texto4, 90, () => {
                    botao.innerHTML += '<a href="../pagina2/index.html">Começar</a>';
                });
            });
        });
    });
});

const limiteCorações = 60; // Número máximo de corações na tela

function criarQuadrado() {
    // Conta o número de corações atualmente na tela
    const coraçõesExistentes = document.querySelectorAll('.quadrado').length;

    // Se o número de corações na tela for menor que o limite, cria um novo coração
    if (coraçõesExistentes < limiteCorações) {
        const quadrado = document.createElement('div');
        quadrado.classList.add('quadrado'); // Adiciona a classe para o estilo do coração

        quadrado.style.left = `${Math.random() * 98}vw`;
        quadrado.style.top = `${Math.random() * 5}vh`;
        
        document.body.appendChild(quadrado);

        quadrado.style.animation = 'cair-continuo 7s linear infinite';

        quadrado.addEventListener('animationend', () => {
            quadrado.remove();
        });
    }
}

setInterval(criarQuadrado, 300);
