console.log("Hello, Day 5 Assignment 3")

let jsonObject = [];

let url = "https://jsonplaceholder.typicode.com/todos"

async function completedToDos()
{
    const response = await fetch(url)

    let data = await response.json()

    console.log(data)

    for(let i = 0; i < 200; i++)
    {
        jsonObject = JSON.stringify(data[i])
        
        if(jsonObject.includes("true"))
        {
            console.log(jsonObject)
        }
    }
    
}

completedToDos()