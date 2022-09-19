// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.
// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
//const fruit1 = "apple"
//const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
//First, I declare a variable. To do this I will use the let keyword. I name the variable - boilingPoint and assign a value 212 to it.
//Second, I write a conditional statement to compare my given number with boilingPoint number.
//Since I have three option in my decision structure, I will use if/else if statement. 
//I will use console.log to log   `${temp} is below boiling point.` if temp < 212
                                //`${temp} is at boiling point.` if temp === 212
                                //`${temp} is above boiling point.` if temp > 212
//const temp = 42
//let boilingPoint = 212
    // if (temp < 212) {
    //     console.log(`${temp} is below boiling point.`)
    // } else if (temp === 212) {
    //     console.log(`${temp} is at boiling point.` )
    // } else if (temp > 212) {
    //     console.log(`${temp} is above boiling point.` )
    // } else {
    //     console.log("Ooops. Try again")
    // }
// Expected output: "42 is below boiling point"
// Result: work as expected

// const temp = 350
// let boilingPoint = 212
//     if (temp < 212) {
//         console.log(`${temp} is below boiling point.`)
//     } else if (temp === 212) {
//         console.log(`${temp} is at boiling point.` )
//     } else if (temp > 212) {
//         console.log(`${temp} is above boiling point.` )
//     } else {
//         console.log("Ooops. Try again")
//     }
// Expected output: "350 is above boiling point"
// Result: work as expected

// const temp = 212
// let boilingPoint = 212
//     if (temp < 212) {
//         console.log(`${temp} is below boiling point.`)
//     } else if (temp === 212) {
//         console.log(`${temp} is at boiling point.` )
//     } else if (temp > 212) {
//         console.log(`${temp} is above boiling point.` )
//     } else {
//         console.log("Ooops. Try again")
//     }

    // Expected output: "212 is at boiling point"
    // Result: work as expected


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

//To complete the task I will use accessor method .concat() first to combine the two arrays.
//Then, I will use length property to return the number of elements in the array. 

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

// Expected output: 9
//Result: as expected

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
//First, I use .split() method to convert a string into an array and after doing that I will be able to manipulate the items. 
//Then, I will use .reverse() method to reverse the order of the values in an array.
//Finaly, I will use .join(" ") method to convert all values in an array to a string again.
//I console.log it



const currentCohort = "Foxtrot 2022"
console.log(currentCohort.split("").reverse().join(""))

// Expected output: "2202 tortxoF"
//Result: 2202 tortxoF // It returned without "". Did I do somth wrong?

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
