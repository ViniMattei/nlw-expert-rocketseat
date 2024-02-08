const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação de backend",
      "Uma linguagem de marcação",
      "Uma linguagem de programação de frontend",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação estrita de igualdade",
      "Atribuição de valor",
      "Concatenação de strings",
    ],
    correta: 0
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um tipo de variável",
      "Um tipo de laço de repetição",
      "Um bloco de código reutilizável",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
    respostas: [
      "var x = 5;",
      "x = 5;",
      "variável x = 5;",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "push()",
      "adicionar()",
      "append()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "/* Este é um comentário */",
      "<!-- Este é um comentário -->",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a finalidade do método 'querySelector()' em JavaScript?",
    respostas: [
      "Para selecionar elementos HTML usando CSS selectors",
      "Para declarar variáveis",
      "Para criar funções",
    ],
    correta: 0
  },
  {
    pergunta: "O que é uma 'Promise' em JavaScript?",
    respostas: [
      "Um tipo de variável",
      "Um tipo de função",
      "Um objeto que representa o resultado de uma operação assíncrona",
    ],
    correta: 2
  },
  {
    pergunta: "Como se chama o processo de combinar dois ou mais arrays em JavaScript?",
    respostas: [
      "Merge",
      "Concatenar",
      "Unir",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o método utilizado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "remove()",
      "delete()",
    ],
    correta: 0
  },
];

const quiz = document.querySelector('#quiz')
const templete = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas




// aqui ta pegando as pergunta e retornando true , 
//depois ta clonando as 10 perguntas

for (const item of perguntas) {
  const quizItem = templete.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  // aqui ta pegando as resposta do dl e dt e clonado e depois pegando span e aplicando o dt assim pegando as resposta
  
  for (resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }
    


    quizItem.querySelector('dl').appendChild(dt)
  }

  // aqui ta removendo a respota A que deixamos no html usando .remove
  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}