// --------------------1------------
// function oddOrNot(num) {
//     const digits = num.toString().split('');
//    for(let i=0;i<digits.length;i++){
//         if (digits[i] % 2 == 0) {
//             return 'number digits is NOT odd'
//         }
//     };
//     return 'number digits is Odd'
// }

// -----stugum-----
// console.log(oddOrNot(177));
// -----------------------2------------------

// function smallestPositivElem(arr) {
//     let positivNumbers = [];

//     function allPositivNumbers(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] >= 0) {
//                 positivNumbers.push(arr[i])
//             }
//         };
//     };

//     allPositivNumbers(arr);

//     function smallest(arr) {
//         if (arr.length == 0) {
//             return -1;
//         } else if (arr.length < 2) {
//             return arr[0];
//         }

//         return Math.min(arr.shift(), smallest(arr));
//     };

//     return smallest(positivNumbers);
// };

// // --------------Stugum------------
// let arr = [-1, -2, -5, -6, -8, -4, 5, 3];
// console.log(smallestPositivElem(arr));
// -----------------------3-------------------------

// function sortedVioleted(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[i - 1]) {
//             return i;
//         } else if (i == arr.length - 1) {
//             return -1;
//         }
//     }
// };

// // -------------stugum----------

// console.log(sortedVioleted([-9, -4, -4, 3, 12, 4, 5]));

// -------------------4-------------

// function remuveFirstElem(arr) {
//     if (arr.length == 0) {
//         return [];
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             return [...arr.slice(1)]
//         }
//     }

// };
// console.log(remuveFirstElem([1,2]));
// -----------------5------------------

// function flatten(items) {
//     const flat = [];

//     items.forEach(item => {
//         if (Array.isArray(item)) {
//             flat.push(...flatten(item));
//         } else {
//             flat.push(item);
//         }
//     });

//     return flat;
// }



// // ----stugum----
// let arr3 = [1, 2, 3, [4, 5, 6], 7,[ 8, 9, [10, 11, 12, 13, [14, 15, 16]]]];
// console.log(flatten(arr3));


// ------------------------6--------------------
// function arrNpushAndShift(arr, n) {
//     if (n == 0) {
//         return arr;
//     } else {
//         arr.push(arr[0]);
//         arr.shift();
//         return arrNpushAndShift(arr, n - 1)
//     }
// };

// // ----------------stugum------------
// console.log(arrNpushAndShift(['a', 'b', 'c', 'd','e','f','g','h'], 3));

// -------------------------7-------------------

// function numSum(n) {
//     let numbers = n.toString().split('');
//     if (numbers.length == 1) {
//         return numbers[0]
//     } else {
//         let n2 = 0;
//         numbers.forEach(element => {
//             n2 += +element
//         });
//         return numSum(n2);
//     }
// }

// // -------------stugum-----------------
// console.log(numSum(29));
// console.log(numSum(14));
// console.log(numSum(99999));
// ---------------8--------------------

// function deepClonObj(obj) {
//     let cloneObj = {};

//     for (const [key, value] of Object.entries(obj)) {
//         if (typeof value == 'object') {
//             cloneObj[key] = deepClonObj(value);

//         } else {
//             cloneObj[key] = obj[key];
//         }
//     }
//     return cloneObj;

// }

// // ------------------stugum---------
// const objTest = {
//     a: 'hi',
//     b: 'by',
//     c: {
//         ac: 'hi',
//         ab: 'by'
//     }
// }

// console.log(deepClonObj(objTest));
// console.log(deepClonObj(objTest) ===objTest);
// console.log(deepClonObj(objTest).c === objTest.c);
// ---------9---------------
// function debounce(func, wait) {
//     let timeout;

//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };

//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// };

// // ----stugum---
// const checkPositiveNumber = e => {
//     console.log(+e.target.value > 0);
// };
// const numInput = document.querySelector("input[type=number]");
// numInput.addEventListener("input", debounce(checkPositiveNumber, 600));
// ---------------10-------------------

// function throttle(func, timeFrame) {
//     let lastTime = 0;
//     return function () {
//         let now = new Date();
//         if (now - lastTime >= timeFrame) {
//             func();
//             lastTime = now;
//         }
//     };
// }


// // ------stugum-----

// let throt_fun = throttle(function () {
//     console.log('Function throttled after 1000ms!');
// }, 1000);

// // Defining loop
// let loop = function () {
//     setTimeout(loop, 5)
//     throt_fun();
// };

// // Calling loop to start
// loop();

// throt_fun();
