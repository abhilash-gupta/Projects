let array = [21,22,23,24,25,21,22]
let set1 = new Set(array)

// console.log(array);
// console.log(set1);
console.log(set1);
console.log(`type: ${typeof set1}`);
set1.add(30)
console.log(set1);
console.log(`${set1.has(26)}`);
// set1.forEach((value) => console.log(value))
console.log(set1.values());
console.log(set1.keys());
console.log(set1.entries());