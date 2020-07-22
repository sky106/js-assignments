console.log("Hello, Day 6 Assignment 3")

let name = prompt("Enter Your Name ?", "Anonymous")

const displayName = document.getElementById('name')
displayName.innerText = `Welcome, '${name}' To The LetsUpgrade Family...`

const displayTime = document.getElementById('time')

function clock(){
    let day = new Date()
    let date = day.toLocaleTimeString()
    displayTime.innerText = `Current Time: ${date}`
}
setInterval(clock, 1000)

const button = document.getElementById('btn')
button.onclick = ()=>{
    if (document.body.className==''){
        document.body.classList.toggle('dark')
        button.innerText = `Switch To Light Mode`
    }
    else{
        document.body.classList.toggle('dark')
        button.innerText = `Switch To Dark Mode`
    }
}