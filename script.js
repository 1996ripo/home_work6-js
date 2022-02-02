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
