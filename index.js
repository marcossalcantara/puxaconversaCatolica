let apertar = document.querySelector("header")

let perguntas = [
  "Quando um católico pode faltar a missa do domingo?",
  "Qual a roupa ideal para um católico?",
  "Porque não comungar na mão?",
  "Qual a fé de quem bate palma na missa?",
  "O que é legítima defesa para um católico?",
  "Fumar é pecado?",
  "Quando um católico pode ser a favor do aborto?",
  "Peca mortalmente quem come carne na sexta feira?",
  "Matar é considerado pecado contra o Espírito Santo?"
]

function prox(){
  let questao = document.querySelector("#questao")
  let numero_sorteado = Math.floor(Math.random() * perguntas.length)

  if(perguntas.length === 0){
    return questao.innerHTML = `<h1>Fim das perguntas. Deus abençoe.</h1>`
  }

  questao.innerHTML = `<h1>${perguntas[numero_sorteado]}</h1>`
  
  perguntas.splice(numero_sorteado, 1)[0]
}