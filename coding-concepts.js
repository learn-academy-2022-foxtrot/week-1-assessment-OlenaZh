// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

// const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer:
// i believe this will log 10.
// b) Verify and explain:
// output: 10 - because the length property returns the length of a string or, in other words, counts every character including spaces.


// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:
// This will log a letter o
// b) Verify and explain:
//Since the index of first character H is [0] the index of [4] has letter o 
// like this:
 // H [0]
 //e [1]
 //l [2]
 //l [3]
 //o [4] ...


// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer:
//Ruby
// b) Verify and explain:
//My answer is correct. Since JS arrays are zero-indexed, that means the first element of an array is at index [0], the second ia at index [1] and so on. In our case the first element of our array is "JavaScript" - index [0], and "Ruby" is at index [1]. We use index number, which is [1] in our case, to access an array element. 


// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:
//["SATURDAY",  "SUNDAY"]
// b) Verify and explain:
//Got this: TypeError: weekendDays.toUpperCase is not a function
//I was wrong :) 
//I forgot that we can not use .toUpperCase method to the array as is. We need to create for loop to loop through the array and then call .toUpperCase(). 
//Or I can use buit-in methods: join(" ")  - to convert all values in the array to a string.
    //Next use .toUpperCase()
    //After that use .split(" ") method to convert a string into the array again.
// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.join(" ").toUpperCase().split(" "))
//Output: [ 'SATURDAY', 'SUNDAY' ]


// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:
//number
// b) Verify and explain:
//number is correct answer. Since dataTypes.length returns a length of the array -> the number of elements in the array -> which is 3. 
// typeof 3 is a number. 
