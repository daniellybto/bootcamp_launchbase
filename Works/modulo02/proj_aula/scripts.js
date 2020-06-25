const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards){
  card.addEventListener('click', function(){
    const videoID = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoID}`
  })
}

document.querySelector(".close-modal").addEventListener('click', () => {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector("iframe").src = ""
})


//<iframe width="560" height="315" src="https://www.youtube.com/embed/X3W-YFe2_io" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>