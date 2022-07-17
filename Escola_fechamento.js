//Encerramento do ano letivo da escola Alura

const listaDeChamda = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo', 'Tiago', 'Paulo', 'Juliano', 'Amanda'];

//Notas individuais
const joao = [4, 7, 6, 8];
const ana = [7, 9, 5.5, 6];
const caio = [10, 8, 9, 8];
const lara = [7, 6, 5, 8];
const marjorie = [10, 10, 9, 9.5];
const leo = [5, 5.5, 6.8, 8];
const tiago = [7.5, 8, 9.5, 8];
const paulo = [10, 9.5, 7, 8.5];
const juliano = [5, 6.5, 8, 7.5];
const amanda = [2, 7, 9, 5.5];


const notasAlunos = [joao, ana, caio, lara, marjorie, leo, tiago, paulo, juliano, amanda];
const mediasAlunos = [];

// Fazendo um loop na lista de notas de cada aluno
notasAlunos.forEach(notasDoAluno => {

    // Calculando a média do aluno

    let soma = 0;
    // Usando outro loop para fazer a soma
    notasDoAluno.forEach(nota => soma += nota);
    const media = soma / notasDoAluno.length;

    // Adicionando a média na lista de médias
    mediasAlunos.push(media);
});


const reprovados = listaDeChamda.filter((_, indice) => mediasAlunos[indice] < 7);

console.log(reprovados);