// estão fora da função, pois não queremos que sejam executados toda vez que a função for clicada, ou seja, seriam zerados.
let totalGeral = 0;
limpar();

/*
document.getElementById('lista-produtos').innerHTML = '';
// é utilizado textContent ou invés de innerHTML, pois a ID lista-produtos está dentro de uma TAG Parágrafo (p)
document.getElementById('valor-total').textContent = 'R$ 0';
*/

function adicionar() {
    // estamos pegando o produto e seus valores
    let produto = document.getElementById('produto').value;
    // basicamente o Split() serve para separar strings em arrays, ou seja, quando usamos o produto.split('-')[0], estamos nos referindo que queremos a partir do hífen ('-') pegar o que vem antes, ou seja, [0]. E o [1] assim como se entende, seria após o hífen.
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    // aqui delimitamos uma variável para o contador de quantidade.
    let quantidade = document.getElementById('quantidade').value;
    // e aqui criamos a variavel para multiplicar a quantidade que queremos do produto, lembrando, sempre usando o '' value '' , pelo valorUnitário que foi separado do produto a partir do delimitador.
    let preco = quantidade * valorUnitario;
    // criando a variavel na qual especificamos a lista dos produtos que aparecem no carrinho.
    let listaCarrinho = document.getElementById('lista-produtos');
    // aqui fazemos um innerHTML para aparecer na tela o que selecionamos para comprar. Nunca tinha visto antes, mas foi copiado o código HTML na qual se guarda os itens do carrinho, que é uma section, sem ter que usar um createElemente. Foi apenas substituido os campos de quantidade do produto, nome do produto e valor do produto, para aparecer de forma certa. E esse segundo listaCarrinho.innerHTML + , significa que toda fez que adicionarmos mais uma coisa, o que está lá não vai sumir, pois estamos '' concatenando '' novos itens.
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>`;
    // basicamente estamos pegando o totalGeral que é 0 e somando com a variável '' preco '' , que multiplica a quantidade pelo valor do produto.
    totalGeral = totalGeral + preco;
    // estamos atribuindo a variável na qual será modificada toda vez que somamos o valor total.
    let valorTotalProdutos = document.getElementById('valor-total');
    // fazendo o valor total aparecer.
    valorTotalProdutos.textContent = `R$ ${totalGeral}`
    // e aqui utilizamos um método para limpar o valor da quantidade de produtos que queremos comprar, o valor que consta em '' quantidade ''. Fiz diferente do alura atribuindo um valor vazio, pois é chato ficar apagando o 0 kkkkkk.
    document.getElementById('quantidade').value = '';

}
    
function limpar() {
    // aqui tiramos o '' let '' da variamos totalGeral, pois estamos atribuindo um valor a variável.
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}