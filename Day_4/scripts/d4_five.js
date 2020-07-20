console.log("Hello, Day 4 Assignment 5")

let sales = Number(prompt("Enter the Sales made by the Employee : "))
var comm
function cal(amt){
    if (amt>=0 && amt<=5000){
        comm = amt * 0.02
        return comm
    }
    else if (amt>=5001 && amt<=10000){
        comm = 5000 * 0.02 + (amt - 5000) * 0.05
        return comm
    }
    else if (amt>=10001 && amt<=20000){
        comm = 5000 * 0.02 + 5000 * 0.05 + (amt - 10000) * 0.07
        return comm
    }
    else{
        comm = 5000 * 0.02 + 5000 * 0.05 + 10000 * 0.07 + (amt - 20000) * 0.1
    }
}

let finalComm = cal(sales)
console.log("The Total Commission is : ", finalComm.toFixed(2))

  
