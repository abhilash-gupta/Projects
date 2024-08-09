let arr = [11,12,13,14,15,20]
let arr1 = []

arr.forEach((value) => arr1.push(value))
// arr.forEach(myFunction)

function myFunction(value){
    // console.log(`Value : ${value}`);
    arr1.push(value)
}

console.log(arr);
console.log(arr1);