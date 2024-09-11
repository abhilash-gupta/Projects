const Person = {
    firstname: 'John',
    lastname: 'Doe',
    display: function(age){
        return `Fullname is ${this.firstname} ${this.lastname} - ${age}`
    }
}

const Player = {
    firstname: 'Smith',
    lastname: 'Peter',
    age: 22
}

console.log(Person.display.call(Player, Player.age));
console.log(Person.display.apply(Player, [Player.age]));
