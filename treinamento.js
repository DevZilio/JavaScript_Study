// Procurando dentro da lista

// - Crie uma funcao que recebe como argumento o modelo de um veiculo.
// - Verifique se o modelo esta presente na lista e retorne a fabricante que se encontra no mesmo indice
// - Caso o modelo do veiculo nao esteja na lista, retorne uma mensagem indicando que o modelo nao foi encontrado


const modeloCarro = ['Corsa 1.0', 'Hilux', 'Gol 1.0', 'Uno Mile'];
const fabricanteCarro = ['Chevrolet', 'Toyota', 'Wolkswagem', 'Fiat'];

const modeloEfabricanteCarro = [modeloCarro, fabricanteCarro]

const exibeModeloEFabricante = (nomeDoCarro) => {
    if (modeloEfabricanteCarro[0].includes(nomeDoCarro)) {
        let indice = modeloEfabricanteCarro[0].indexOf(nomeDoCarro);
        return modeloEfabricanteCarro[0][indice] + ' sua fabricante e ' + modeloEfabricanteCarro[1][indice];
    } else {
        return "Modelo de carro nao cadastrado no sistema"
    }
}

console.log(exibeModeloEFabricante("Corsa 1.0"));
console.log(exibeModeloEFabricante("Hilux"));
console.log(exibeModeloEFabricante("Gol 1.0"));
console.log(exibeModeloEFabricante("Uno Mile"));
console.log(exibeModeloEFabricante("Corolla"));


// ---------------------------------

const nomes = ['Paulo', 'Henrique', 'Zilio']
const nomes2 = ['Juca', 'Basuca', 'Bilula']

nomes.forEach(mostraNomes);
nomes2.forEach(mostraNomes);

function mostraNomes(nome) {
    console.log(nome)
}


//------------------------------------------------------------------------------

const arrayNums = [1, 2, 3, 4]

function multiplaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNums.map(multiplaPorDez)

console.log(arraySomada);

//---------------------------------------------------

const listaDeChamda = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
const mediasDosAlunos = [6.8, 8, 7.5, 9, 6, 7]

const reprovados = listaDeChamda.filter((_, indice) => mediasDosAlunos[indice] < 7.5);

console.log(`Alunos reprovados ${reprovados}`);