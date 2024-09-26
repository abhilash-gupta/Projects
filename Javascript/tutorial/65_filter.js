let arr1 = [1,2,3,4,5,6,7,8,9,10]

// function getEvenNumbers(number){
//     return number % 2 === 0
// }

let evenNumbers = arr1.filter(number => number % 2 === 0)
console.log(`original array : ${arr1}`);
console.log(`even numbers : ${evenNumbers}`);

