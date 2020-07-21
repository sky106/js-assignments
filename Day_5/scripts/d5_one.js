console.log("Hello, Day 5 Assignment 1")

let pnum = parseInt(prompt("Please Enter a Positive Number : "))

if(pnum >= 0)
{
    console.log(`Entered Number is : ${pnum}`)

    let numArr = [];
    for(let i = 0; i <= pnum; i++)
    {
        numArr.push(i)
    }
    console.log("Array of Numbers : ", numArr)

    let oddNum = numArr.filter(element => (element % 2) != 0)
    console.log("Odd Numbers : ", oddNum)

    let oddCube = oddNum.map(element => element ** 3)
    console.log("Cube of Odd Numbers : ", oddCube)
}
else
{
    alert("Please Enter a Positive Number Next Time...!!!")
}
