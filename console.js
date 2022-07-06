//o que e a ferramenta console.


console.log() //Log significa que estamos criando um registro para nosso console (qualquer tipo de dado, string, variavel, numero...)

const minhaVar = true;

console.log(245);
console.log('eu sou um texto');
console.log(minhaVar);

// Tratamento de erro

console.error('deu erro!');






//Entre os outros métodos, existem:

console.error() //para exibir mensagens de erro;
console.table() //para visualizar de forma mais organizada informações tabulares;
console.time()
console.timeEnd() //para temporizar período que uma operação de código leva para ser iniciada e concluída;
console.trace() //para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

//Vamos tentar novamente, passando uma informação um pouco diferente para console.error():

console.log("deu erro");
console.error(new Error("deu erro"));