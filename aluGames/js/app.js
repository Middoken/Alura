function alterarStatus(id) {
   let gameClicado = document.getElementById(`game-${id}`);
   let imagem = gameClicado.querySelector('.dashboard__item__img');
   let botao = gameClicado.querySelector('.dashboard__item__button');
   
   // dentro da variável imagem, será visto a lista de classes (classList) e será pedido se contem (contains) a determinada classe passada no parâmetro ('classe')
   if (imagem.classList.contains('dashboard__item__img--rented'), botao.classList.contains('dashboard__item__button--return')) {
    // apos verificada, caso houver, vai ser executado, que no caso abaixo, estamos pesquisando a lista de classes de '' imagem '' e removendo a seguinte classe passada pelo parametro.
    // também podemos perceber a troca do nome '' alugar '' para '' devolver '' usando o método textContent.
        imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
   } else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
   }
}