alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 29;
let tentativa = prompt('Escolha um número entre 1 e 30');
console.log(numeroSecreto)

// se o chute for igual ao numero secreto
if (numeroSecreto == tentativa ) {
    alert(`Isso ai, você descobriu o número secreto ${numeroSecreto}`) 
} else {
    alert('Este não é o número secreto! Tente mais uma vez.')
}
