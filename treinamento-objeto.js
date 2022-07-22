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

    },
    {
        nome: "Paulo",
        idade: 29,
        cpf: "41889530809",
        dependentes: [{
                nome: "Thor",
                idade: 2,
                parentesco: "Gato",
                cor: "Amaraleo"
            },
            {
                nome: "Akyra",
                idade: 4,
                parentesco: "Gata",
                cor: "Preto e Branco"
            }
        ]
    },
    {
        nome: "Glaucia",
        idade: 38,
        cpf: "31827398123",
        dependentes: [{
            nome: "Branquinho",
            idade: 2,
            parentesco: "Gato",
            cor: "Branco"
        }]
    }
]


const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes, ...clientes[2].dependentes, ...clientes[3].dependentes]


console.table(listaDependentes)