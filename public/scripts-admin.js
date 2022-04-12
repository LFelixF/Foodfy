// ADMIN INDEX - click revenue
const cardsAdmin = document.querySelectorAll(".card-admin")

for(let card of cardsAdmin) {
    let cardId = card.getAttribute("id")

    card.querySelector("button").addEventListener("click", () => {
        window.location.href = `/admin/revenues/${cardId}`
    })
}

// ADMIN CREATE - button add and remove
function addIngredient() {
    const ingredients = document.querySelector("#ingredients")
    const inputIngredient = document.querySelectorAll(".ingredient")

    const newInput = inputIngredient[inputIngredient.length - 1].cloneNode(true)

    if(newInput.children[0].value == "") return false

    newInput.children[0].value = ""
    ingredients.appendChild(newInput)
}

function addSteps() {
    const steps = document.querySelector("#steps")
    const inputStep = document.querySelectorAll(".step")

    const newInput = inputStep[inputStep.length - 1].cloneNode(true)

    if(newInput.children[0].value == "") return false

    newInput.children[0].value = ""
    steps.appendChild(newInput)
}

function removeIngredient() {
    const ingredients = document.querySelectorAll(".ingredient")
    const ingredient = ingredients[ingredients.length - 1]
    
    if(ingredients.length - 1 > 0) ingredient.remove()
}

function removeStep() {
    const steps = document.querySelectorAll(".step")
    const step = steps[steps.length - 1]

    if(steps.length - 1 > 0) step.remove()
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient)
document.querySelector(".remove-ingredient").addEventListener("click", removeIngredient)
document.querySelector(".add-step").addEventListener("click", addSteps)
document.querySelector(".remove-step").addEventListener("click", removeStep)

// ADMIN CREATE - dados null
const formCreate = document.querySelector("#form-create")
const formInputs = document.querySelectorAll("#form-create input")

formCreate.addEventListener("submit", (event) => {
    for(let input of formInputs){
        if(input.value == "") {
            const confirmation = confirm("Formulário com campo vazio. Deseja continuar?")

            if(!confirmation) event.preventDefault()

            return
        }
    }
})

// ADMIN EDIT - button delete
const formDelete = document.querySelector("#form-delete")

formDelete.addEventListener("submit", (event) => {
    const confirmation = confirm("Deseja continuar?")

    if(!confirmation) event.preventDefault()
})