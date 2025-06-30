// tenta passar os nomes para maisculo usando toUpperCase.


let nomes = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo'.toUpperCase());
    
    // o return no fim, está encerrando a função, parando ela e não fazendo com que gere um BUG de inserir uma '' , '' no nada, pois sem o return, estaria executando o resto da função.
    if (nome.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (nomes.includes(nome.value)) {
        alert('Nome já adicionado!')
        return;
    }
    let lista = document.getElementById('lista-amigos');
    // Adicionando os nomes num Array.
    nomes.push(nome.value);
    /*let listaAparecer = nome.value;
    lista.textContent = lista.textContent + `${listaAparecer}, `;*/
    if (lista.textContent == '') {
        lista.textContent = nome.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
    }
    nome.value = '';
    
}

function sortear() {
    if (nomes.length < 4) {
        alert('Adicione pelo menos 4 amigos!')
        return;
    }
    embaralha(nomes)
    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < nomes.length; i++) {
        // se for TRUE, significa que já chegou no final do array.
        if (i == nomes.length -1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + nomes[i] + ' --> ' + nomes[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + nomes[i] + ' --> ' + nomes[i + 1] + '<br>';
        }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}

function embaralha(lista) {
    for (let i = nomes.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nomes[i], nomes[j]] = [nomes[j], nomes[i]]
    }
    return nomes;
}