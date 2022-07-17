const listaCPFs = ["123123123", "423423424", "45745435867"]

//const cliente = ["nome", "Andre", "idade", 36] // Nao funciona relacionar dados dentro da array

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123123123",
    email: "andre@gmail.com"
}

// DESAFIO - Printar infos
// Acessar um objeto com informacoes de um cliente e exivir essas informacoes no console.

console.log(cliente.nome);
console.log(`o nome do cliente e ${cliente.nome} e sua idade e ${cliente.idade} anos.`);
console.log(cliente.cpf.substring(0, 3));


// DESAFIO - Acessar chaves (acessar lista)
// Consultar um objeto utilizando uma lista de chaves relativas a informacoes de clientes gerada pelo sisteme printar o reultado na tela

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))


// DESAFIO - Adicionando campos
// Adicionar informacoes importantes que ainda estao faltando, como telefone e tambes seus valores

cliente.fone = "9878768232" // Apenas coloque o nome do objeto + . + nome da chave = valor da chave

// se ja houver o mesmo nome de chave, o valor sera substituido

console.log(cliente)
cliente.fone = "novo numero"
console.log(cliente)


// Para excluir um campo chave e seu valor, utilize delete nomeDoObjeto.nomeDaChave

delete cliente.fone

console.log(cliente);