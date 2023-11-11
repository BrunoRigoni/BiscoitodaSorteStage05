const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomPhrases;
let resetRandomPhrases;

let phrases =   [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
   "A juventude não é uma época da vida, é um estado de espírito.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O riso é a menor distância entre duas pessoas.",
  "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.",
]


randomPhrases = phrases[Math.floor(Math.random() * phrases.length)]

function showLucky() {

  screen1.classList.add("hide")
  screen2.classList.remove("hide")

  screen2.querySelector("p").innerText = `${randomPhrases}`   

  
}


function returnPage() {
  
  
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  
  if(randomPhrases = phrases) {
    randomPhrases = phrases[Math.floor(Math.random() * phrases.length)]
  }


}

