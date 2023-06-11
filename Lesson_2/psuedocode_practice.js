// Given two numbers
// add the numbers and return the result

// START 

// Given two numbers, num1 and num2

// PRINT num1 + num2


// Given an array of strings called arr

// PRINT array.join(' ') 


// START
// Given an array of integers called arr

// SET everyOther = []
// Iterate over arr
// IF index is even
// add arr[index] to everyOther

// PRINT everyOther

// START
// Given a string called string

// SET an object called charCount = {}
// Iterate over string
// charCount[char] += 1
// IF charCount[char] === 3
// return char
// return null

// START
// Given two arrays of numbers, arr1 and arr2 
// SET counter = 0
// SET merged = []
// WHILE arr2.length > 1
// IF counter % 2 === 0
// call .shift() on arr1[counter] and add the value to merged
// ELSE 
//call .shift() on arr2[counter] and add the value to merged
// Increment counter
// return merged

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let counter = 0;
let merged = [];

while (arr2.length > 0) {
  counter % 2 === 0 ? merged.push(arr1.shift()) : merged.push(arr2.shift());
  counter += 1;
}

console.log(merged);
