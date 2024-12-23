let botaoTema = document.getElementById("mudar-tema");
const imagem = document.getElementById("foto");
const centro = document.getElementById("centro");

const petalas = document.querySelectorAll('.petala');

centro.addEventListener("click", function () {
    const containerFlor = document.querySelector('.container-flor');
    
    containerFlor.style.animation = 'desaparecer 2s forwards';
    
    containerFlor.addEventListener('animationend', function () {
        containerFlor.remove();
        document.body.innerHTML += `
<div class="caixa-namoro" onclick="abrirCaixa()">
    <div class="tampa"></div>
    <div class="base-caixa">
        <a href = '../pagina4/index.html'><div class="anel" id="anel"></div></a>
    </div>
</div>
        `;
        reativarBotaoTema();
    });
});

function abrirCaixa() {
    const tampa = document.querySelector(".tampa");
    const anel = document.getElementById("anel");

    // Anima a tampa para abrir
    tampa.style.transform = "rotateX(180deg)";

    // Faz o anel aparecer
    setTimeout(() => {
        anel.style.transform = "scale(1)";
        anel.style.opacity = "1";
    }, 500); // Espera 500ms para abrir a tampa antes de mostrar o anel
    reativarBotaoTema()
}



function reativarBotaoTema() {
    botaoTema = document.getElementById("mudar-tema");
    botaoTema.addEventListener('click', function () {
        if (cores.fundo === '#f7e9fc') {
            cores.fundo = '#dfefff';
            cores.texto = '#2a4d69';
            cores.bordaDisco = '#4a90e2';
            cores.fundoMensagem = '#ffffff';
            cores.hoverMensagem = '#82b1ff';
            cores.fundoConteudoMensagem = '#e3f2fd';
            cores.quadrado = '#6ec6ff';
            botaoTema.innerText = 'Tema João';
            imagem.src = "../img/Joao.gif";
        } else {
            cores.fundo = '#f7e9fc';
            cores.texto = '#5e356e';
            cores.bordaDisco = '#8e44ad';
            cores.fundoMensagem = '#ffffff';
            cores.hoverMensagem = '#d7aefb';
            cores.fundoConteudoMensagem = '#f3e5f5';
            cores.quadrado = '#a3009e';
            botaoTema.innerText = 'Tema Rafa';
            imagem.src = "../img/Rafa.gif";
        }

        aplicarCores();
    });
}

const mensagens = [
    "Você é meu momo",
    "Seu sorriso ilumina meu dia",
    "O amor que sinto por você é maior que tudo que existe",
    "Momo lida",
    "Meu nenê lindo",
    "Você vai casar com eu",
    "Você é perfeita meu amor"
];

function mostrarMensagem() {
    const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById("mensagem-aleatoria").querySelector("p").innerText = mensagem;
}

const cores = {
    fundo: '#f7f7f7',
    texto: '#333',
    bordaDisco: '#333',
    fundoMensagem: '#fff',
    hoverMensagem: '#1e88e5',
    fundoConteudoMensagem: '#e1f5fe',
    quadrado: '#a3009e'
};

function aplicarCores() {
    document.documentElement.style.setProperty('--color-bg', cores.fundo);
    document.documentElement.style.setProperty('--color-text', cores.texto);
    document.documentElement.style.setProperty('--color-disc-border', cores.bordaDisco);
    document.documentElement.style.setProperty('--color-message-bg', cores.fundoMensagem);
    document.documentElement.style.setProperty('--color-message-hover', cores.hoverMensagem);
    document.documentElement.style.setProperty('--color-message-content-bg', cores.fundoConteudoMensagem);
    document.documentElement.style.setProperty('--color-quadrado', cores.quadrado);
}

aplicarCores();

document.getElementById('mudar-tema').addEventListener('click', function () {
    if (cores.fundo === '#f7e9fc') {
        cores.fundo = '#dfefff';
        cores.texto = '#2a4d69';
        cores.bordaDisco = '#4a90e2';
        cores.fundoMensagem = '#ffffff';
        cores.hoverMensagem = '#82b1ff';
        cores.fundoConteudoMensagem = '#e3f2fd';
        cores.quadrado = '#6ec6ff';
        botaoTema.innerText = 'Tema João';
        imagem.src = "../img/Joao.gif"
    } else {
        cores.fundo = '#f7e9fc';
        cores.texto = '#5e356e';
        cores.bordaDisco = '#8e44ad';
        cores.fundoMensagem = '#ffffff';
        cores.hoverMensagem = '#d7aefb';
        cores.fundoConteudoMensagem = '#f3e5f5';
        cores.quadrado = '#a3009e';
        botaoTema.innerText = 'Tema Rafa';
        imagem.src = "../img/Rafa.gif" 
    }

    aplicarCores();
});

function alternarMensagem() {
    var containerMensagem = document.querySelector('.container-mensagem');
    function criarQuadrado() {
        const alturaSite = document.body.scrollHeight;
        const duracaoQueda = Math.max(3, alturaSite / 100);
        const limiteCoracoes = 50 + Math.floor(duracaoQueda * 1.4);
        const quadradosExistentes = document.querySelectorAll('.quadrado').length;

        if (quadradosExistentes < limiteCoracoes) {
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

    function atualizarAlturaQuadrados() {
        const alturaSite = document.body.scrollHeight;
        document.querySelectorAll('.quadrado').forEach(quadrado => {
            quadrado.style.setProperty('--altura-site', `${alturaSite}px`);
        });
    }

    setInterval(criarQuadrado, 300);
    setInterval(atualizarAlturaQuadrados, 200);

    containerMensagem.classList.toggle('aberto');
}

