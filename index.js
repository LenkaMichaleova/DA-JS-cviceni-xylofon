const kameny = document.querySelectorAll(".kamen")

kameny.forEach((kamen) => {
    kamen.addEventListener("click", () => {
        document.querySelector("h1").textContent = kamen.textContent
        new Audio(`tony/${kamen.textContent}.mp3`).play()    
    })
})

document.addEventListener("keydown", (e) => {
    if(e.code.startsWith("Digit")) {
        const koncovka = e.code.slice(e.code.length - 1)
        document.querySelector("h1").textContent = kameny[koncovka-1].textContent
        new Audio(`tony/${kameny[koncovka-1].textContent}.mp3`).play()
    }
})