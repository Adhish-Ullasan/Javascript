// Program to check whether a string is a palindrome string

const myString = 'MALAYALAM'                                //created a string

console.log(myString)

let joinedString;                                           // declared an empty variable

const palindromeORnot = (str) => {                          // declared a function to check palindrome or not

    const splittedArray = str.split('')                     // splitted using split()
    console.log(splittedArray)                              // displayed
    const reversedArray = splittedArray.reverse()           // reversed the splited array
    joinedString = reversedArray.join('')                   // joined the splitted array
    console.log(joinedString)                               // displayed
    if ( myString === joinedString) {                       // conditonak check whether it is palindrome or not
    return true                                             // if so return true
    }
    else {
    return false                                            // other wise return false
    }

    // const reverseString = str.split('').reverse().join('')

    // if (str === reverseString) {
    //     return true
    // } else {
    //     return false
    // }

}

console.log(palindromeORnot(myString))