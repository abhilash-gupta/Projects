const fruits = ['mango', 'banana', 'apple', 'orange', 'guava']
// console.log(`Sorted fruits : ${fruits.sort()}`);
// console.log(`Reversed fruits : ${fruits.reverse()}`);
// console.log(`Descending order : ${fruits.sort().reverse()}`);

console.log(`Sorted fruits : ${fruits.toSorted()}`);
console.log(`Original fruits : ${fruits}`);

const numbers = [22,11,3,45,34,65,63,5,8,2]
console.log(`Sorted numbers : ${numbers.sort((a,b) => a - b )}`);

