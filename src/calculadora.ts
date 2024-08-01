interface IAluno {
    nome: string;
    idade: number;
}

const alunoAnna : IAluno = {
    idade: 21,
    nome: "Anna"
}

import { soma } from './soma'
import { sub } from './sub'

console.log(soma(10,20))
console.log(sub(10,20))

