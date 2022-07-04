// Para determinar uma String, utilize Aspas simples ou duplas

const texto1 = "Ola, mundo";
const texto2 = 'Ola, mundo';
const senha = "senhaSuperSegura456!"
const StringDeNumeros = "34567";

// const citacao = 'O Leo disse "oi!"';
const citacao = "Meu nome e ";
const meuNome = 'Paulo'

//console.log(citacao)

//concatenacao (+) uso para juntar strings

console.log(citacao + meuNome);


//template string ou template literal - o que e?

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//para padronizar uma comparação entre strings:

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true
console.log(inputMinusculo);

//Outro exemplo: qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres