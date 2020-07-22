console.log("Hello, Day 6 Assignment 1")

let arrColor = ["blue", "red", "green", "yellow", "white", "black","darkcyan", "blueviolet"]
let i = 0

function changeBack() {
        document.bgColor = arrColor[i]
        i = (i + 1) % arrColor.length
        setTimeout(changeBack, 5000)
}
changeBack()