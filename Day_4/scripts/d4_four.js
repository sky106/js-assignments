console.log("Hello, Day 4 Assignment 4")

while(true){
    var choice = Number(prompt("--------------------------------- Calculator--------------------------------- \r\nWhat Do You Want To Do ? \r\n 1. Addition\r\n 2. Subtraction\r\n 3. Multiplication\r\n 4. Division\r\n 5. Square root\r\n 6. Percentage\r\nEnter the number corresponding to your choice ?  "))
    if (choice==1 || choice==2 || choice==3 || choice==4 || choice==5 || choice==6 || choice==" ")
        break
}

if (choice==1 || choice==2 || choice==3 || choice==4){    
        var numbers1 = prompt("Enter two numbers separated by a space ? (for e.g. 10 20)")
        var getEachNum1 = numbers1.split(" ")           
}

else if(choice==5){
        var numbers2 = prompt("Enter the number ?")
}

else if(choice==6){
        var numbers3 = prompt("Enter your marks ? (In this format - for e.g. 75/100)")
        var getEachNum2 = numbers3.split("/")          
}
else{
    alert("You are NOT selected any option. Thank You, Visit Again...!!!")
}

switch(choice){
    case 1:
        console.log("The Addition is : ", Number(getEachNum1[0]) + Number(getEachNum1[1]))
        break
    case 2:
        console.log("The Subtraction is : ", Number(getEachNum1[0]) - Number(getEachNum1[1]))
        break
    case 3:
        console.log("The Multiplication is : ", Number(getEachNum1[0]) * Number(getEachNum1[1]))
        break
    case 4:
        console.log("The Division is : ", Number(getEachNum1[0]) / Number(getEachNum1[1]))
        break    
    case 5:
        console.log("The Square root is : ", Math.sqrt(numbers2))
        break  
    case 6:
        console.log("The Percentage is : ", ((Number(getEachNum2[0]) / Number(getEachNum2[1]))*100).toFixed(2))
        break  
}
