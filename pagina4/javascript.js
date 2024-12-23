let puxando = false;
let posicaoInicial = 0;

function iniciarPuxarCaixa(event) {
    puxando = true;
    posicaoInicial = event.clientY;
    document.addEventListener('mousemove', puxarCaixa);
}

function pararPuxarCaixa() {
    puxando = false;
    document.removeEventListener('mousemove', puxarCaixa);
}

function puxarCaixa(event) {
    if (!puxando) return;
    const caixa = document.querySelector('.caixa');
    const deslocamento = posicaoInicial - event.clientY;
    if (deslocamento > 50) { // Ajuste o valor conforme necessário
        caixa.classList.add('aberta');
        pararPuxarCaixa();
    }
}

function abrirCaixa() {
    const caixa = document.querySelector('.caixa');
    caixa.classList.toggle('aberta'); // Alterna a classe 'aberta' para abrir/fechar a tampa

    if (caixa.classList.contains('aberta')) {
        setTimeout(() => {
            exibirMensagem();
        }, 500); // Espera 500ms para exibir a mensagem após abrir a tampa
    }
}

function exibirMensagem() {
    const mensagem = "Olhe para a pessoa que você mais ama";
    const mensagemContainer = document.querySelector('.mensagem-especial');
    mensagemContainer.innerHTML = '<h1></h1>';
    const mensagemTexto = mensagemContainer.querySelector('h1');
    let i = 0;

    function digitar() {
        if (i < mensagem.length) {
            mensagemTexto.innerHTML += mensagem.charAt(i);
            i++;
            setTimeout(digitar, 100); // Ajuste o tempo conforme necessário
        }
    }

    digitar();
}

// Adicione evento de toque para dispositivos móveis
document.querySelector('.caixa').addEventListener('touchstart', function() {
    abrirCaixa();
});

function criarQuadrado() {
    const quadrado = document.createElement('div');
    quadrado.classList.add('quadrado'); // Adiciona a classe para o estilo do quadrado

    quadrado.style.left = `${Math.random() * 98}vw`;
    quadrado.style.top = `${Math.random() * 5}vh`;
    
    document.body.appendChild(quadrado);

    quadrado.style.animation = 'cair-continuo 7s linear infinite';

    quadrado.addEventListener('animationend', () => {
        quadrado.remove();
    });
}

setInterval(criarQuadrado, 300);