// function sum(a, b){
//     return a + b
// }

// console.log(sum(10, 20));
// console.log(sum.call(this, 5, 10));

const Animal = {
    name: 'Animal',
    display: function(name1){
        return `this is an Animal - ${name1}`
    }
}

const Dog = {
    name: 'dog'
}

console.log(Animal.display('Animal'));
console.log(Animal.display.call(Dog, Dog.name));
