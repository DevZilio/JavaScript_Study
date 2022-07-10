//Tipo de operador de comparacao, vai retornar verdadeiro e falso

//Ele e basicamente um if(else), mas de uma maneira diferente, pode ser feito em uma linha, mais reduzido

//  Exemplo: um sistema de bebida e so pode liberar se o usario for maior de 18 anos

const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) { // se fossemos usar o 'if'
    console.log('cerveja')
} else {
    console.log('suco')
}

// Utilizando o tenario

//         . // condicao                   //true      //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco") //base do operador tenario

// se chama tenario quando temos 3 operadores na mesma linda, >= para dizer que tipo de comparacao sera feita, ? para separar a condicao da resposta, e : para separar o resultado da condicao

// use para pequenas comparacoes, em caso de muitos if, utilizar o codigo do if


// Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando um ?, seguido da possibilidade true, um : e a possibilidade false, ou seja, comparação ? true : false.