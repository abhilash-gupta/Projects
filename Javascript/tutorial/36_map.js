let map1 = new Map()

map1.set(3, 'three')
map1.set(1, 'one')
map1.set(2, 'two')
console.log(map1.get(1));
console.log(typeof map1);
console.log("Size of map1 : " + map1.size);
// map1.delete(2)
// map1.clear()
// console.log(map1.has(4));
// map1.forEach(display)
map1.forEach((value, key) => console.log(`${key} = ${value}`))

// function display(value, key, map){
//     console.log(`${key} = ${value}`);
// }

console.log(map1.entries());




