const person = {
    firstname: 'John',
    lastname: 'Doe',
    display: function(age){
        return `${this.firstname} ${this.lastname} - ${age}`
    }
}

const player = {
    firstname: 'Smith',
    lastname: 'Peter',
    age: 22
}

console.log(`Using call method - ${person.display.call(player, player.age)}`);
console.log(person.display.apply(player, [player.age]));
let display = person.display.bind(player);
console.log(display());




