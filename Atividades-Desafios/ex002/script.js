let question = prompt('Digite um número positivo ou negativo')

if (question < 0) {
    alert('Você digitou um número negativo!')
} else if (question >= 0) {
    alert('Você digitou um número positivo!')
} else {
    alert('Digite um número!')
}