// MENU - LINKS
const currentPage = window.location.pathname
const links = document.querySelectorAll(".menu-links a")

for(let link of links) {
    if(currentPage.includes(link.getAttribute("href"))) link.classList.add("active")
}

// Page - Revenues
const cards = document.querySelectorAll(".card")
const revenueTopic = document.querySelectorAll(".revenue-topic")

for (let card of cards) {
    let cardId = card.getAttribute("id")

    card.querySelector(".card-img").addEventListener("click", () => {
        window.location.href = `/revenue/${cardId}`
    })
}

// Page - Revenue
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