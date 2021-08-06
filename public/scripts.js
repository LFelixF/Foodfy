const cards = document.querySelectorAll(".card")
const revenueTopic = document.querySelectorAll(".revenue-topic")

for (let card of cards) {
    let cardId = card.getAttribute("id")

    card.querySelector(".card-img").addEventListener("click", () => {
        window.location.href = `/revenue/${cardId}`
    })
}

for (let topic of revenueTopic) {
    const hideShow = topic.querySelector(".hide-show")
    const content = topic.querySelector(".topic-content")
    const show = "MOSTRAR"
    const hide = "ESCONDER"

    hideShow.addEventListener("click", () => {
        if (content.classList.contains("hide")) {
            content.classList.remove("hide")
            hideShow.querySelector("p").innerText = hide
        }
        else {
            content.classList.add("hide")
            hideShow.querySelector("p").innerText = show
        }
    })
}