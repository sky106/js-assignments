console.log("Hello, Day 4 Assignment 6")

while(true){
    let num = Number(prompt("Enter any number which is greater than 100 ?"))
    if (num>100 || num == " "){
        console.log(`You Entered Number : ${num}`)
        break;
    }
}
