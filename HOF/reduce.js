// array.reduce(callback, valorInicial);
const notaEstudantes = [
    {
        nome: 'Brenda',
        materias: [
            { name: 'Matemática', nota: 100 },
            { name: 'História', nota: 25 },
            { name: 'Português', nota: 90 },
            { name: 'Artes', nota: 62 },
        ],
    },
    {
        nome: 'Gabriel',
        materias: [
            { name: 'Matemática', nota: 69 },
            { name: 'História', nota: 81 },
            { name: 'Português', nota: 90 },
            { name: 'Artes', nota: 62 },
        ],
    },
    {
        nome: 'Otavio',
        materias: [
            { name: 'Matemática', nota: 36 },
            { name: 'História', nota: 25 },
            { name: 'Português', nota: 48 },
            { name: 'Artes', nota: 67 },
        ],
    },
    {
        nome: 'Jessica',
        materias: [
            { name: 'Matemática', nota: 0 },
            { name: 'História', nota: 95 },
            { name: 'Português', nota: 95 },
            { name: 'Artes', nota: 60 },
        ],
    },
    {
        nome: 'Ronaldo',
        materias: [
            { name: 'Matemática', nota: 66 },
            { name: 'História', nota: 0 },
            { name: 'Português', nota: 0 },
            { name: 'Artes', nota: 41 },
        ],
    }
];

// const report = notaEstudantes.map((aluno) => ({
//     name: aluno.nome,
//     materias: aluno.materias.reduce((acc, materia) => {
//         //console.log('acumulador: ', acc, 'materia: ', materia);
//         if (acc.nota > materia.nota) {
//             return acc;
//         } else {
//             return materia; 
//         }
//     }).name
// }));


// FORMA SIMPLIFICADO COM ARROW FUNCTION E OPERADOR TERNÁRIO

const report = notaEstudantes.map((aluno) => ({
    name: aluno.nome,
    materias: aluno.materias
        .reduce((acc, materia) =>  acc.nota > materia.nota ? acc : materia).name,
}));

console.log(report);