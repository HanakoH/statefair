const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchase", customEvent => {
        contentTarget.innerHTML += `<div class="person player"></div>`
    })
}