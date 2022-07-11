// Funcao "normal"

function apresentar(name) {
    return `meu nome e ${name}`;
}


// Arrow function

const apresentarArrow = nome => `meu nome e ${nome}`;

console.log(apresentar("Paulo"));
console.log(apresentarArrow("Paulo"));

const soma = (num1, num2) => num1 + num2;

console.log(soma(5, 8));

// Arrow function com + de 1 linha de instrucao

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(15, 9)); // somente numeros de 1 a 9
console.log(somaNumerosPequenos(5, 9)); // 14


//Hoisting arrow function se comporta como expressao