const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    let cardId = card.getAttribute("id")
    let cardRevenue = card.querySelector(".card-revenue").innerText
    let cardAuthor = card.querySelector(".card-author").innerText

    card.querySelector(".card-img").addEventListener("click", function () {
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = `./images/${cardId}.png`
        modalOverlay.querySelector("img").alt = cardId
        modalOverlay.querySelector(".modal-revenue").innerText = cardRevenue
        modalOverlay.querySelector(".modal-author").innerText = cardAuthor
    })
}

document.querySelector(".modal-close").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ""
    modalOverlay.querySelector("img").alt = ""
    modalOverlay.querySelector(".modal-revenue").innerText = ""
    modalOverlay.querySelector(".modal-author").innert = ""
})