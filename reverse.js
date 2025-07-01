//  Write a Program to reverse a string in JavaScript.

const myString = 'JAVASCRIPT'                           //Decladed a variable myString

const reverseString = (str) => {                        //created a function 

    
    const splittedArray = str.split('')                 //Splitted the string to an array using split() innorder reverse the elements/characters
    
    console.log(splittedArray)                          //Displayed splitted array

    const reversedArray = splittedArray.reverse()       /*
                                                            Reversed the splitted array using reverse()array method 
                                                            and stored in reversedArray variable 
                                                        */
    const joinedString = reversedArray.join('')         //Joined the splitted array after reversing to joinedString variable


    return joinedString;                                //returned the joinedString

}

console.log(myString)                                   //Displayed declared string

console.log(reverseString(myString))                    //Displayed reversed string