/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */

// 1) Given a string, return a new string that replaces every occurrence of the word "important"
//    with "urgent":
let advice = "Few things in life are as important as house training your pet dinosaur. Also important is washing your hands";
let newString = advice.replace('important', 'urgent'); // for one occurrence.

let array = advice.split(' '); // Bonus solution for multiple occurences
array.map((word) => word.replace('important', 'urgent')).join(' ');

// 2) The Array.prototype.reverse method reverses the order of elements in an array,
// and Array.prototype.sort can rearrange the elements in a variety of ways, including descending.
// Both of these methods mutate the original array as shown below. Write two distinct ways of
// reversing the array without mutating the original array. Use reverse for the first solution,
// and sort for the second.

array = [1, 2, 3, 4, 5];

function reverse(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    newArray.push(arr[i]);
  }
  return newArray;
}

function sort(arr) {
  let newArray = [];
  arr.forEach((num) => {
    newArray.unshift(num);
  });
  return newArray;
}

// 3 Given a number and an array, determine whether the number is included in the array.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

function isNumInArray(array, num) {
  return array.includes(num);
}

// 4) Starting with the string:
let famousWords = "seven years ago...";
let missingWords = "Four score and ";
//show two different ways to put the expected "Four score and " in front of it.
let fullFamousWords1 = missingWords + famousWords;
let fullFamousWords2 = missingWords.concat(famousWords);

// 5) Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at
//    index 2, so that the array becomes [1, 2, 4, 5].
let indexTwoRemoved = [...array];
indexTwoRemoved.splice(1,1);

// 6) Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newFlintstones = flintstones.join(',').split(',');

// 7) Create an array from this object that contains only two elements: Barney's name
//    and Barney's number:
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Object.entries(flintstones)[2]
// [].concat('Barney', flintstones['Barney'])

// 8) How would you check whether the objects assigned to variables numbers and table below are arrays?
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers);
Array.isArray(table);

// 9) Back in the stone age (before CSS), we used spaces to align things on the screen. If we
// have a 40-character wide table of Flintstone family members, how can we center the following
// title above the table with spaces?
let title = "Flintstone Family Members";
let newTitle = title.padStart(((40 - title.length) / 2) + title.length, '.');

// 10) Write a one-line expression to count the number of lower-case t characters in each of
// the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;


