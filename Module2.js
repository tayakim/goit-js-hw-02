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

// function checkForSpam(str) {
//     'use strict';
//     if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// Task #6
// function mapArray(array) {
//     'use strict';
//     const numbers = new Array(array.length);

//     for (let i = 0; i < array.length; i += 1) {
//         // let mul = array[i] * 10;
//         // console.log(mul);
//         numbers[i] = array[i] * 10;
//     }
//     return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]


// Task #7

// function filterArray(array) {
//     'use strict';
//     const numbers = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (Number.isFinite(array[i]) === true) {
//             numbers.push(array[i])
//         }

//     }
//     return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]

// Task #8
// function reduceArray(array) {
//     'use strict';
//     let total = 0;
//     if (array === 0) {
//         console.log("0");
//     } else {
//         for (let i = 0; i < array.length; i += 1) {
//             total += array[i];
//         }
//     }

//     return total;
// };


// console.log(reduceArray([1, 2, 3]));
// 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// Task #9

// function isLoginValid(login, min = 4, max = 16) {
//     if ((login.length >= min) && (login.length <= max)) {
//         return true;

//     } else {
//         return false;
//     }
// }

// function isLoginUnique(allLogins, login) {
//     'use strict';
//     for (let i = 0; i < allLogins.length; i += 1) {
//         if (allLogins[i] === login) {
//             return false;
//         }
//     }
//     return true;
// }

// function addLogin(allLogins, login) {
//     'use strict';
//     const SUCCESS = 'Логин успешно добавлен!';
//     const REFUSAL = 'Такой логин уже используется!';
//     const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//     let message;
//     if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
//         allLogins.push(login);
//         message = SUCCESS;
//     } else if (isLoginUnique(allLogins, login) === false) {
//         message = REFUSAL;
//     } else {
//         message = ERROR;
//     }
//     return message;
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'
// console.log(logins);
// console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'
// console.log(logins);
// console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'