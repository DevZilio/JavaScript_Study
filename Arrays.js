// Notas Aluno 10, 6.5, 8, 7.5

// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;

const notas = [10, 6.5, 8, 7.5]

// let media = (nota1 + nota2 + nota3 + nota4) / 4
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;


// console.log(media);
// console.log(notas.length); // .length conta a quantidade de elementos dentro da array

// Adicionando elemento dentro do array

const notas2 = [10, 6, 8]
notas2.push(7);

// console.log(notas2);

let media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length;

// console.log(media2);


// Deletando um elemento dentro do array

const notas3 = [10, 7, 5, 8, 10];
notas3.pop(); // Nao declara nada, sempre ira deletar o ultimo elemento

//console.log(notas3);

let media3 = (notas3[0] + notas3[1] + notas3[2] + notas3[3]) / notas3.length;

//console.log(media3);
// console.log(`A media e ${media3}`);


// Existem muitos métodos para conseguir lembrar de todos, mas vamos listar os principais para a aprendizagem. São eles:

// concat()
// Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
// Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.

const salaDePython = ['Melissa', 'Helena', 'Rodrigo'];
const saldaDeJavaScript = ['Ju', 'Leo', 'Raquel'];

const salaUnificadas = salaDePython.concat(saldaDeJavaScript);

//console.log(salaUnificadas);


// filter()
// Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
// Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.

// find()
// Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.

// findIndex()
// Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.

// indexOf()
// Localiza e retorna o índice referente à primeira ocorrência de determinado valor em um array. Caso não exista nenhuma ocorrência do valor, retorna -1.

// lastIndexOf()
// Funciona da mesma forma que o indexOf(), porém retorna o índice referente à última ocorrência de um valor em um array, varrendo o array de trás para frente.

// forEach()
// Executa uma função em cada elemento do array de forma individual.
// Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.

// pop()
// Retira o último elemento do array.
// Altera o array original removendo o elemento.

// shift()
// Retira o primeiro elemento do array.
// Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.

// push()
// Adiciona o elemento passado como parâmetro do array, porém na última posição.
// Altera o array original com o novo valor.

// unshift()
// Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
// Altera o array original com o novo valor.

// reduce()
// Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.

// reduceRight()
// Funciona igual o reduce() porém começa do final do array e segue até o início.

// reverse()
// Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

// slice()
// Copia uma parte do array para outro array.

const nomes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', ' Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

// console.log(`Alnunos da sala 1: ${sala1}`);
// console.log(`Alnunos da sala 2: ${sala2}`);

// sort()
// Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

// splice()
// Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.

// Ana e Caio mudaram de escola e Rodrigo entrou na turma

const listaDeChamda = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaDeChamda.splice(1, 2, 'Rodrigo') // Posicao, quantidade a ser deletado, elemento a ser incluido
listaDeChamda.splice(2, 0, 'Thiago') // Podemos apenas adicionar um elemento a posicao que queremos, colocando 0 na segunda posicao

//console.log(`Lista de chamada: ${listaDeChamda}`);

//     -------------------------------------------------------------------

//                      lista de duas dimensoes


//Desafio - Lisata com 2 dimensoes
// Crie uma lista com os seguintes alunos e alunas:
// - 'Joao', 'Juliana', 'Caio', 'Ana'

// Crie uma lista com as seguintes medias:
// - 10, 8, 7.5, 9

// Crie uma lista com 2 dimensoes com os nomes e as medias

//                //0   
const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']

//                        //0
const mediasDosAlunos = [10, 8, 7.5, 9]

//                          //0      1
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(`${listaDeNotasEAlunos[0][0]} sua media e ${listaDeNotasEAlunos[1][0]}`);