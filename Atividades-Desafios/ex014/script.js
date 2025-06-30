let valor = 48;

function convercaoReais(valor) {
    let conversão = valor / 4.80;
    return conversão;
}

let resultado = convercaoReais(valor);
alert(`O valor em dolar de ${valor} quando convertido para reais, fica em torno de R$${resultado} Reais`);



