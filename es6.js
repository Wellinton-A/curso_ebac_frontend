const alunos = ['Marcos', 'Julia', 'Mateus', 'Larissa', 'José'];

const minMedia = 1;
const maxMedia = 10;

const mediasAlunos = alunos.map(aluno => ({ nome: aluno, nota: Math.floor(Math.random() * (maxMedia - minMedia + 1)) + minMedia, }))

function alunosAprovados1(array) {
    let aprovados = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].nota >= 6) {
            aprovados.push(array[i])
        }
    }
    return aprovados
}

const alunosAprovados = alunosAprovados1(mediasAlunos);
const alunosAprovados2 = mediasAlunos.filter(aluno => aluno.nota >= 6);

const teste1 = alunosAprovados.every(aluno => aluno.nota >= 6);
const teste2 = alunosAprovados2.every(aluno => aluno.nota >= 6);


console.log(teste1);
console.log(teste2);