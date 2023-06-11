/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */

// 1) Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5; // [1, 2, 3, <3 empty items>, 5]
numbers[4]; // undefined

// 2) How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!";
let str2 = "What's up, Doc?";
// str1.endsWith('!'); => true
// str2.endsWith('!'); => false

// 3) Determine whether the following object of people and their age contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log('Spot' in ages); => false
// Solution: ages.hasOwnProperty('Spot'). Difference between in and hasOwnProperty is hasOwnProperty doesn't return true for inherited properties.

// 4) Using the following string, create a new string that contains all lowercase letters
//    except for the first character, which should be capitalized. (See the example output.)
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let newString = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
// console.log(newString); => The munsters are creepy and spooky.

// 5) What will the following code output?
false == '0'; // true
false === '0'; // false

// 6) We have most of the Munster family in our ages object:
ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);
/* => {
        Herman: 32,
        Lily: 30,
        Grandpa: 5843,
        Eddie: 10,
        Marilyn: 22,
        Spot: 237
      }
*/

// 7) Determine whether the name Dino appears in the strings below -- check each string separately:
str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes('Dino'); // => false
str2.includes('Dino'); // => true

// 8) How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
/* => [
  'Fred',   'Barney',
  'Wilma',  'Betty',
  'Bambam', 'Pebbles',
  'Dino'
]
*/

// 9) How can we add multiple items to our array? ('Dino' and 'Hoppy')
flintstones.push('Dino', 'Hoppy');
/* => [
  'Fred',   'Barney',
  'Wilma',  'Betty',
  'Bambam', 'Pebbles',
  'Dino',   'Dino',
  'Hoppy'
]
*/

// 10) Return a new version of this sentence that ends just before the word house.
//     Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.substring(0, advice.indexOf('house'));
// Expected return value:
// => 'Few things in life are as important as '