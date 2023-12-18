let addItem = () => {

    let newItem = document.createElement("h2")
    newItem.textContent = "- " + document.querySelector("#userInput").value

    newItem.addEventListener("click", () => {
        if (newItem.style.textDecoration != "line-through") {
            newItem.style.textDecoration = "line-through"
        } else {
            newItem.style.textDecoration = "none"
        }
    })

    document.querySelector("#display").appendChild(newItem)
    document.querySelector("#userInput").value = ""

}

document.querySelector("#userInput").addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        addItem()
    }
} )

document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#display").textContent = ""
})