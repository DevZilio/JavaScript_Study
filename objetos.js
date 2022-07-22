const listaCPFs = ["123123123", "423423424", "45745435867"]

//const cliente = ["nome", "Andre", "idade", 36] // Nao funciona relacionar dados dentro da array

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123123123",
    email: "andre@gmail.com",
    fones: ["36472364723", "42367452764"]
}

// DESAFIO - Printar infos
// Acessar um objeto com informacoes de um cliente e exibir essas informacoes no console.

// console.log(cliente.nome);
// console.log(`o nome do cliente e ${cliente.nome} e sua idade e ${cliente.idade} anos.`);
// console.log(cliente.cpf.substring(0, 3));


// DESAFIO - Acessar chaves (acessar lista)
// Consultar um objeto utilizando uma lista de chaves relativas a informacoes de clientes gerada pelo sisteme printar o reultado na tela

const chaves = ["nome", "idade", "cpf", "email"];

// console.log(cliente[chaves[0]])

// chaves.forEach(info => console.log(cliente[info]))


// DESAFIO - Adicionando campos
// Adicionar informacoes importantes que ainda estao faltando, como telefone e tambes seus valores

cliente.fone = "9878768232" // Apenas coloque o nome do objeto + . + nome da chave = valor da chave

// se ja houver o mesmo nome de chave, o valor sera substituido

// console.log(cliente)
cliente.fone = "novo numero"
    // console.log(cliente)


// Para excluir um campo chave e seu valor, utilize delete nomeDoObjeto.nomeDaChave

delete cliente.fone

// console.log(cliente);

// DESAFIO - Lista de telefones
// Acessar a lista de numeros de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se ha mais de um numero de telefone no mesmo cadastro


// cliente.fones.forEach(fone => console.log(fone));


// DESAFIO - Compondo um objeto
// Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

cliente.dependentes = [{
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}]

// console.log(cliente);


// Alterando a propriedade dentro do objeto do objeto

cliente.dependentes.nome = "Sara Silva"

// console.log(cliente);

cliente.dependentes.escola = "Grupao"

// console.log(cliente);

// DESAFIO - Listas de dependentes
// Verificar a melhor forma de agregar a informacao de um novo dependente ao objeto Cliente.

// Primeiro devemos trasnformar o objeto dependentes em um array, colocando [] e depois podemos utilizar os metodos de array para modificar a lista de objetos (obejto -> array -> objeto)

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

// console.log(cliente);


const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

// console.log(filhaMaisNova[0].nome);
// console.log(filhaMaisNova);

//--------------------------------------------------------------- novo objeto

const cliente2 = {
    nome: 'Andre',
    idade: 36,
    cpf: '32643527457',
    email: 'andre@gmail.com',
    fones: ['7462837647823', '23864872634'],
    dependentes: [{
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '20/03/2011'
        },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'

        }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}


// DESAFIO - Fazendo depositos
// Adicionar uma propriedade que permita "acoes", para que os clientes que estao cadastrados cosigam fazer operacoes bancarias

// console.log(cliente2.saldo);

clientes.depositar(30);
clientes.depositar(-30);
clientes.depositar((2 * 4) + 10);

// console.log(cliente2.saldo);


//---------------------------------------------------------------------------------------

// O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    arma: "Cajado Magico",
    habilidades: {
        elemento: "fogo",
        forca: 20
    },

}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

// console.log(objPersonagem.nome) //Gandalf
// console.log(objPersonagem2.nome) //Gandalf, o Cinzentoconst objPersonagem = { nome: "Gandalf", classe: "mago", nivel: "20"} const objPersonagem2 = Object.create(objPersonagem) objPersonagem2.nome = "Gandalf, o Cinzento" console.log(objPersonagem.nome) //Gandalf  //console.log(objPersonagem2.nome) //Gandalf, o Cinzento



// Desestruturando o objeto e criando constante com os valores


const { nome, classe } = objPersonagem;

// console.log(nome, classe);


// Pode se criar um novo nome para a variavel utilizando o valor da chave

const { nivel: level } = objPersonagem;

// console.log(nome, level);

//    // se declararmos uma chave que nao tem no objeto, resultado: Undefinied. 
//  // Entao podemos definir um valor padrao para esta chave dentro da variavel

const { arma, exp = '9000' } = objPersonagem;

// console.log(arma, exp);


// Desconstruindo o objeto dentro do objeto

const { habilidades: { elemento, forca } } = objPersonagem;

// console.log(elemento, forca);

//-----------------------------------------------------------------------------------


// DESAFIO - Puxando relatorio
// Percorrer um objeto e extrair informacoes basicas do cliente em um formato mais legivel e de forma automatizada para fornecer a outros departamentos do banco

let relatorio = "";

for (let info in clientes) {
    if (typeof clientes[info] === "object" || typeof clientes[info] === "function") {
        continue //Palavra reservada
    } else {
        relatorio += ` 
        ${info} ==> ${clientes[info]}
        `
    }
}

// console.log(relatorio);



// DESAFIO - Oferta de seguro 
// Percorrer um objeto, verificar se existe a chave 'dependentes' e, caso exista, enviar uma mensagem de oferta de seguro.


// function oferecerSeguro(obj) {
//     const propsClientes = Object.keys(obj);
//     if (propsClientes.includes("dependentes")) //Includes retorna true or false
//     { console.log(`Oferta de seguro de vida para ${obj.nome}`) }

// }

// oferecerSeguro(cliente);

// console.log(Object.values(cliente));
// console.log(Object.entries(cliente));


// DESAFIO - Lista de dependentes
// Extrair de uma listagem de clientes apenas as informacoes de dependentes e montar uma lista unica, para analise de outros departamentos do banco.

const clientes = [{
        nome: 'Andre',
        idade: 36,
        cpf: '32643527457',
        dependentes: [{
                nome: 'Sara Silva',
                parentesco: 'filha',
                dataNasc: '20/03/2011'
            },
            {
                nome: 'Samia Maria',
                parentesco: 'filha',
                dataNasc: '04/01/2014'

            }
        ],
    },
    {
        nome: "Juliana",
        idade: 40,
        cpf: '32643527457',
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '20/03/2020'
        }],

    }
]

const listaDeDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

// console.log(listaDeDependentes);
// console.table(listaDeDependentes);