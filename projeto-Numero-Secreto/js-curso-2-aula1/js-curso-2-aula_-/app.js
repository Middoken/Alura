// quando começar o código e iniciar a função pedindo o número aleatório, na função gerarNumeroAleatorio será exibido por conta do '' return '' no qual nos retorna o que pedimos.
let numerosecreto = gerarNumeroAleatorio();

function exibirTextoNaTela() {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numerosecreto)
    if (chute == true) {
        alert('Você acertou!')
    } else {
        alert('Você errou!')
    }
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}












//function verificarChute() {
//    if (chutar) {
//        paragrafo.innerHTML = 'chutou'
//    } else {
//        alert('Deu errado!')
//    }
//}