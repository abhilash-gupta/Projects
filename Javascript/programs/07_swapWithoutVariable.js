let a = 5
let b = 7
console.log(`Before Swapping : a = ${a} and b = ${b}`);

// [a, b] = [b, a] // destructuring
a = a + b // 5 + 7 = 12
b = a - b // 12 - 7 = 5
a = a - b // 12 - 5 = 7

console.log(`After Swapping : a = ${a} and b = ${b}`);