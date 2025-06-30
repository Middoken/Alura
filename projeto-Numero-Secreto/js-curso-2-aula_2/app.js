// Se atentar na ordem imposta nas variáveis, pois o JS lê linha por linha, tal qual pode gerar BUGS caso as coisas forem ordenadas de forma errada na qual queremos que funcionem.
let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// A explicação da função exibirTextoNaTela ficou mais clara depois que analisei kkkkk. Basicamente, os dois elementos passados por parâmetro (tag, texto) se referem ao que vemos na função exibirMensagemInicial, como por exemplo: 'h1' = tag e o texto = 'Jogo do Número secreto'. Isso acontece pois nossa variável campo, vai pegar a TAG e armazenar, assim, quando damos innerHTML nela, especificamos que vai ser igual ao texto que escrevemos logo após denominarmos a TAG.
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} tentativas!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

// temos aqui um exemplo muito bom de verificação de um número na lista. O método ( .includes ) vai verificar para nós se o elemento no qual queremos saber, independente se for número, string ou códigos, já consta em nossa lista. E dentro dos {} na função do nosso IF, caso o número já esteja na lista, será gerado um novo número apartir da função gerarNumeroAleatorio().
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.
    random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
    if (quantidadeDeElementosNaLista == 10) {
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}