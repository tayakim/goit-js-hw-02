// Task #1
// const getItemsString = function(array) {
//     'use strict';
//     let result = "";

//     for (let i = 0; i < array.length; i += 1) {
//         result += (`${i + 1} - ${array[i]}\n`)
//     }

//     return result;
// };

//console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

// console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/

// Task #2

// const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord * message.split(' ').length;


// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100

// Task #3
// Ищем самое длинное слово в array
// function findLongestWord(string = "") {
//     let stringArray = string.split(' ');
//     // console.log(stringArray.length);
//     // console.log(stringArray);
//     let longestWord = stringArray[0];
//     // console.log(longestWord);
//     for (let i = 0; i < stringArray.length - 1; i += 1) {
//         if (longestWord.length < stringArray[i + 1].length) {
//             longestWord = stringArray[i + 1];
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord('May the force be with you'));
// // 'force'

// Task #4

// function formatString(string, maxLength = 40) {
//     if (string.length <= maxLength) {
//         return string;

//     }
//     if (string.length > maxLength) {


//         let cutString = string.split('', maxLength);
//         let elem = "...";
//         let newArray = cutString.splice(maxLength + 1, 0, elem);
//         const newSrting = cutString.concat(newArray);
//         let finalString = newSrting.join('');
//         return finalString;
//     }
// }


// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis'));
// 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'

// Task #5

function checkForSpam(str) {
    'use strict';
    if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
        return true;
    } else {
        return false;
    }
}


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true