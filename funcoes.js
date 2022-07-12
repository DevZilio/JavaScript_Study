// Nessa situacao nada acontece, porque o JS roda o codigo linha a linha de cima pra baixo, ou seja a atribuicao do x no exemplo nao aparece no console pois foi atribido apos o comando de console.log

// let x = '';
// console.log(x);
// x = 'oi';


// As funcoes trabalham em duas etapas

// 1 - Decalarar a funcao

function imprimeTexto(texto) { // Forma de funcao - DECLARACAO DE FUNCAO
    console.log(texto)
}

// 2 - Executa a funcao (1 ou + vezes)

imprimeTexto("Oi");
imprimeTexto("outro texto");
imprimeTexto(soma());

function soma() {
    return 2 + 2; // O uso do return deve ser sempre na ultima linha do bloco de funcao

}

//console.log(soma());

// Temos tres formas de escrever funcoes










// As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível, O JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

// Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

// Math.round(4.3) retorna 4
// Math.round(3.85) retorna 4
// Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
// Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

// Math.ceil(5.2) retorna 6
// Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

// Math.floor(5.2) retorna 5
// Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

// Math.trunc(4.3) retorna 4
// Math.trunc(4.8) retorna 4
// Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

// Math.pow(4 , 2) retorna 4^2 = 16
// Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
// Math.sqrt() : Retorna a raiz quadrada de um número.

// Math.sqrt(64) retorna 8
// Math.min(): Retorna o menor valor entre os argumentos.

// Math.min(0, 150, 30, 20, -8, -200) retorna -200
// Math.max(): Retorna o maior valor entre os argumentos.

// Math.max(0, 150, 30, 20, -8, -200) retorna 150
// Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

// Math.random() retorna 0.7456916270759015
// Math.random() retorna 0.15449802102729304
// Math.random() retorna 0.4214269561951203


const num = 11;

if (num > 10 && num < 20) {
    console.log('número válido');
} else {
    console.log('numero nao valido');
}

function verificaNumero(numero) {

    if (numero > 10) {
        return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}

console.log(verificaNumero(9)) //número não é maior que 10



function verificaNumero2(num) {

    if (num >= 0 && num <= 10) {
        console.log('número entre zero e dez');
    } else if (num > 10 && num <= 20) {
        console.log('número entre dez e vinte');
    } else if (num > 20 && num <= 30) {
        console.log('número entre vinte e trinta');
    } else {
        console.log('outro número');
    }
}
//Veja que a cláusula else if também precisa receber a condição (ou as condições) como parâmetros, ao contrário do else, que deve fechar a cadeia de condicionais e continua sem receber nenhum parâmetro, pois é o código que será executado caso todas as outras condições anteriores falhem.








// https://www.alura.com.br/artigos/high-order-functions


const lukeLogin = () => {
    let array = []
    for (i = 0; i < 90000; i++) {
        array.push(i)
    }
    return "Luke logado com sucesso!"
}

const leiaLogin = () => {
    let array = []
    for (i = 0; i < 90000; i++) {
        array.push(i)
    }
    return "Leia logada com sucesso!"
}

console.log(lukeLogin());
console.log(leiaLogin());

const usuarioLogin = (pessoa) => {
    let array = []
    for (i = 0; i < 90000; i++) {
        array.push(i)
    }
    return `${pessoa} logou com sucesso no sistema!`
}

console.log(usuarioLogin("Luke"));