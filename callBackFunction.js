// Write a Program to use a callback function


const smallFunction = (str) => {                //a small function created
    console.log(str)
}


const greet=(name, smallFunction) => {          // another functon created where small function used as parameter

    smallFunction(`${name} Greetings`)
}

greet('John Henry', smallFunction)              // displayed