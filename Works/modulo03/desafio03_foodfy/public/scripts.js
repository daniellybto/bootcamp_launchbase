// const MODAL_OVERLAY = document.querySelector(".modal-overlay")
const CARDS = document.querySelectorAll(".card")

for (let card of CARDS){
  card.addEventListener("click", function(){
    const receitaId = card.getAttribute("id")
    window.location.href = `/receita/${receitaId}`
  })
}

// --------------- funcionalidade Esconder/Mostrar - Pág. Receita
const CARDS_HIDE = document.querySelectorAll(".card__content")

for(let card of CARDS_HIDE){
  card.querySelector(".card__title > a").addEventListener("click", function(){
    card.querySelector(".card__description").classList.toggle("hide")
  })
}