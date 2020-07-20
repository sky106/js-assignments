console.log("Hello, Day 4 Assignment 1")

for(let i=1;i<=100;i++){
    if (i%3==0 && i%5==0){
        console.log(`${i} is a mutiple of 3 & 5, therefore printing "fizzbuzz"`)
    }
    else if(i%3==0){
        console.log(`${i} is a mutiple of 3, therefore printing "fizz"`)
    }
    if(i%5==0){
        console.log(`${i} is a mutiple of 5, therefore printing "buzz"`)
    }
}