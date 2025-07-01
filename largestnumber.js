//Find the largest number in an array in JavaScript.


const findLargest = (arr) => {                      // created a function
    
    let largest = arr[0]                            // created a variable largest and initialized  its value

    for( let i=0 ; i < arr.length ; i++){           // iteration

        if ( arr[i] > largest){

            largest = arr[i]
        }

    }
    return largest

}

console.log (findLargest([90,99,1,100,5]))





        