console.log("Hello, Day 6 Assignment 2")

let num = parseInt(prompt("Enter any positive integer :  "))

if (num > 0){

    const displayNum = document.getElementById('display')
    displayNum.innerText += ` ${num}`

    const table = document.getElementById('list')
    for(let i = 1; i <= 10; i++){
        table.innerHTML += `<h3>${num} x ${i} = ${num*i}</h3>`
    }

}
else{
    alert('You failed to enter a positive integer, Try next time...!!!')
}