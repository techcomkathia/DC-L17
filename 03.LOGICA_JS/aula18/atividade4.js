//Você recebeu um array de todos os alunos da escola. Cada item do array é um objeto js. 
//Atualmente existem as seguintes propriedades: nome, turma, idade, notas (array com  4 notas dos alunos).
//Para cada aluno você precisa calcular a média, criar uma nova propriedade com esse valor e se esse valor for maior ou igual a 7 o aluno terá a situação aprovado, caso contrário reprovado. É necessário que seja criada uma propriedade para armazenar esse valor. 

let alunos = `
[
  {
    "nome": "Ana",
    "turma": "A",
    "idade": 16,
    "notas": [8, 7, 9, 6]
  },
  {
    "nome": "Bruno",
    "turma": "A",
    "idade": 17,
    "notas": [5, 6, 7, 4]
  },
  {
    "nome": "Carla",
    "turma": "A",
    "idade": 16,
    "notas": [9, 8, 10, 9]
  },
  {
    "nome": "Daniel",
    "turma": "A",
    "idade": 18,
    "notas": [6, 7, 5, 8]
  },
  {
    "nome": "Eduarda",
    "turma": "A",
    "idade": 17,
    "notas": [7, 7, 8, 8]
  },
  {
    "nome": "Felipe",
    "turma": "A",
    "idade": 16,
    "notas": [4, 5, 6, 7]
  },
  {
    "nome": "Gabriela",
    "turma": "A",
    "idade": 17,
    "notas": [10, 9, 8, 10]
  },
  {
    "nome": "Henrique",
    "turma": "A",
    "idade": 18,
    "notas": [6, 6, 7, 5]
  },
  {
    "nome": "Isabela",
    "turma": "A",
    "idade": 16,
    "notas": [8, 9, 7, 8]
  },
  {
    "nome": "João",
    "turma": "A",
    "idade": 17,
    "notas": [5, 4, 6, 5]
  },
  {
    "nome": "Laura",
    "turma": "B",
    "idade": 16,
    "notas": [8, 8, 7, 9]
  },
  {
    "nome": "Marcos",
    "turma": "B",
    "idade": 18,
    "notas": [6, 5, 7, 6]
  },
  {
    "nome": "Natália",
    "turma": "B",
    "idade": 17,
    "notas": [9, 10, 8, 9]
  },
  {
    "nome": "Otávio",
    "turma": "B",
    "idade": 16,
    "notas": [4, 6, 5, 7]
  },
  {
    "nome": "Paula",
    "turma": "B",
    "idade": 17,
    "notas": [7, 8, 7, 8]
  },
  {
    "nome": "Rafael",
    "turma": "B",
    "idade": 18,
    "notas": [5, 5, 6, 4]
  },
  {
    "nome": "Sofia",
    "turma": "B",
    "idade": 16,
    "notas": [10, 9, 10, 8]
  },
  {
    "nome": "Thiago",
    "turma": "B",
    "idade": 17,
    "notas": [6, 7, 6, 5]
  },
  {
    "nome": "Valentina",
    "turma": "B",
    "idade": 16,
    "notas": [8, 7, 9, 8]
  },
  {
    "nome": "William",
    "turma": "B",
    "idade": 18,
    "notas": [4, 5, 4, 6]
  }
]`

//Depois de calcular média e situação para todos os alunos crie um objeto de resumo com:
// quantidade de alunos aprovados
// quantidade de alunos reprovados
// media geral por turma 

/*{
    turmaA: {
        media: 7,
        alunosAprovados: 5,
        alunosReprovados: 5
    },
    turmaB: {
        media: 5,
        alunosAprovados: 5,
        alunosReprovados: 5
    }
}/


JSON.parse() //converter texto para obj
