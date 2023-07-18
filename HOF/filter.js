//const arr = ['anna', 'pedro', 'giovanna'];

//arr.filter((element, index, array) => console.log('Elemento:', element, '| Indice: ', index, '| Array:', array));
//index e array é pouco usado

//const filtered = arr.filter((element) => element === 'anna' );
//console.log(filtered);

// !! AGORA COM UM ARRAY DE OBJETOS

const notaEstudantes = [
    {
        nome: 'Brenda',
        nota: 100
    },
    {
        nome: 'Gabriel',
        nota: 80
    },
    {
        nome: 'Otavio',
        nota: 20
    },
    {
        nome: 'Jessica',
        nota: 40
    },
    {
        nome: 'Ronaldo',
        nota: 60
    }
];

const approved = notaEstudantes.filter((aluno) => aluno.nota >= 60);
console.log('Aprovados: ', approved);
const disapproved = notaEstudantes.filter((aluno) => !(aluno.nota >= 60));//!(aluno.nota >= 60) ! é a NEGAÇÃO 
console.log('Reprovados: ', disapproved);