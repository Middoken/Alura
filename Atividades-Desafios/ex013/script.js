let altura = 1.80;
let peso = 65;

function calcularImc(altura, peso) {
    let calculando = peso / (altura * altura);
    return calculando;
}

let resultado = calcularImc(altura, peso);
console.log(`com a altura de ${altura} e o peso de ${peso} temos: ${resultado}`)




