const contentTarget = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchase", customEvent => {
        for (let i = 0; i <= contentTarget.length; i++){
        contentTarget[i].innerHTML += `<div class="person bigSpender"></div>`
        }
    })
}