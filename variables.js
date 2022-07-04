//Tipos de variaveis - Var, Let, Const

//Var - primeira variavel, deixou de ser usada


var altura = 5;
var comprimento = 7;

area = altura * comprimento;

console.log(area);

var area;

// O JavaScript primeiro de tudo visualiza e roda todas as variaveis Var, ou seja, podemos colocar a Var antes ou depois de ser usada na linha de codigo que ira funcionar do mesmo jeito, porem pode ser tornar um pouco confuso...


//Let - pode ser alterada por uma funcao

let forma = 'retangulo'
let altura2 = 5;
let comprimento2 = 7;
let area2;

if (forma === 'retangulo') {
    area2 = altura2 * comprimento2;
} else {
    area2 = (altura2 * comprimento2) / 2
}

area2 = altura2 * comprimento2;
console.log(area2)

// O let e utlizado para ter uma variavel mais segura dentro do bloco da funcao, pois nao pode ser repetido


//const - constante,  nao pode ser alterada e deve ser declarada antes

const forma2 = 'quadrado'
const altura3 = 5;
const comprimento3 = 7;
let area3;

if (forma2 === 'quadrado') {
    area3 = altura3 * comprimento3;
} else {
    area3 = (altura * comprimento3) / 2;
}


console.log(area3);














// Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

// camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

// snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.

// kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.

// PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.


// Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.



// Exemplos de tipos de numeros - Null and undefined

//Exemplo 1

let input = null;

if (input === null) {
    console.log('não há informação');
} else {
    console.log(input);
}


//Exemplo 2
let input2 = null;
let input3;

// console.log(input2); // null
// console.log(input3); // undefined


//Exemplo 3
// console.log(null == undefined); // true
// console.log(null === undefined); // false


//No cotidiano é comum considerar undefined como uma ausência de valor “inesperada” (causada por um bug ou erro no código) e null como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada. Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor null.


//No caso de números, é possível salvar em uma variável não somente o número em si, como em const num = 5;, mas também o resultado de uma operação (ou mais):

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;

// console.log(soma);
// console.log(multiplicacao);
// console.log(operacao);