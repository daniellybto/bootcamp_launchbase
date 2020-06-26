const MODAL_OVERLAY = document.querySelector(".modal-overlay")
const CARDS = document.querySelectorAll(".card")

for (let card of CARDS){
  card.addEventListener("click", function(){
    MODAL_OVERLAY.classList.add("active")

    const IMG = card.getAttribute("data-img")
    const RECEITA = card.getAttribute("data-receita")
    const AUTHOR = card.getAttribute("data-author")

    MODAL_OVERLAY.querySelector("img").src = `assets/${IMG}`
    MODAL_OVERLAY.querySelector("img").alt = `${RECEITA}`
    MODAL_OVERLAY.querySelector("h4").innerText = `${RECEITA}`
    MODAL_OVERLAY.querySelector("p").innerText = `${AUTHOR}`

  })
}

document.querySelector("#close_modal").addEventListener("click", () => {
  MODAL_OVERLAY.classList.remove("active")
})