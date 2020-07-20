console.log("Hello, Day 4 Assignment 7")

while(true){
    var num = Number(prompt("Enter the number (Integer Only):"))
    if (!Number.isInteger(num)){
        continue
    }
    else{
        console.log(`Prime Numbers between 2 - ${num}`)
        break
    }
}

Iteration:
for (let i = 2; i <= num; i++)
{ 
  for (let j = 2; j < i; j++)
  { 
    if (i % j == 0) continue Iteration
  }
  console.log(i)
}