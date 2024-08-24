const fruits = ['apple', 'mango', 'orange', 'banana', 'apple']
console.log(`Position of fruit is : ${fruits.indexOf('orange')}`);
console.log(`Last Position of fruit is : ${fruits.lastIndexOf('apple')}`);
console.log(`banana present? : ${fruits.includes('banana')}`);
console.log(`Banana present? : ${fruits.includes('Banana')}`);

console.log(`mango present : ${fruits.find(myFunction)}`);
console.log(`mango present : ${fruits.findIndex(myFunction)}`);

function myFunction(value, index, arr){
    return value === 'mango'
}
