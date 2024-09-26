let arr1 = [1,2,3,4,5,6,7,8,9,10]

// function getSquare(number){
//     return number * number
// }

getSquare = (number) => number * number

// let resultArray = arr1.map(getSquare)
// let resultArray = arr1.map((number) => number * number)
let resultArray = arr1.map((number) => Math.pow(number, 3))
console.log(`Original array : ${arr1}`);
console.log(`Cube array : ${resultArray}`);
