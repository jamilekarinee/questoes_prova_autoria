// Escreva uma função chamada verificarNumero que retorne uma Promise. A função deve
// gerar um número aleatório entre 1 e 10. Se o número gerado for maior que 5, a Promise
// deve ser resolvida com a mensagem "Número alto!". Se for 5 ou menor, a Promise deve
// ser rejeitada com a mensagem "Número baixo!".

const verificarNumero = () => {
    return new Promise((resolve, reject) => {
        let numeroAleatorio = Math.random() * 10;
        if (numeroAleatorio > 5) {
            resolve(numeroAleatorio)
            return 'Número alto!';
        }
        if (numeroAleatorio <= 5) {
            resolve(numeroAleatorio)
            return 'Número baixo!';
        }
        else {
            return 'Erro.';
        }
    });
};

console.log(verificarNumero())

// Consegui gerar a promise, mas o if aparentemente não funcionou. 