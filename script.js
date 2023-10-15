const value = document.querySelector(".name")
const button = document.querySelector(".button")
let names = ["Adam", "Idris", "Nuh", "Hud", "Saleh", "Ibrahim", "Lut", "Ismail", "Ishaq", "Yaqub", "Yusuf", "Ayyub", "Shu'aib", "Musa", "Harun", "Dzulkifli", "Dawud", "Sulaiman", "Ilyas", "Alyas'a", "Yunus", "Zakaria", "Yahya", "Isa", "Muhammad"]

let colors = ["red", "yellow", "navy", "blue", "orange", "brown", "white", "green", "magenta", "purple", "teal", "peru", "palegreen", "mediumvioletred", "lightseagreen", "lightsalom", "lime", "gray", "darkgray", "chocolate", "crimson", "darkcyan", "gold", "fuchsia", "greenyellow"]

button.addEventListener("click", () => {
    value.textContent = (names[Math.floor(Math.random() * names.length)]);
    value.style.color = (colors[Math.floor(Math.random() * colors.length)])
})
