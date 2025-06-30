/*  A loja oferece desconto progressivo com base na quantidade de jogos comprados;
Cada jogo custa R$50 sem desconto;
Se o cliente comprar 5 ou mais jogos, ele receberá um desconto de 10% em cada jogo;
Se o cliente comprar 10 ou mais jogos, ele receberá um desconto de 20% em cada jogo;  */

function calcularDescontoTotal(quantidadeDeJogos) {
    let desconto = 0;
    let i = 0;

    while (i < quantidadeDeJogos) {
        if (quantidadeDeJogos >= 5 && quantidadeDeJogos < 10) {
            desconto += 0.1 * 50;
        } else if (quantidadeDeJogos >= 10) {
            desconto += 0.2 * 50;
        }
        i++;
    }
    return desconto;
}
