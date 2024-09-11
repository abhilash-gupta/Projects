const Person = {
    firstname: 'Smith',
    lastname: 'Peter',
    display: function(age){
        return `Fullname is ${this.firstname} ${this.lastname} and age is ${age} years`
    }
}

const Player = {
    firstname: 'Maxwell',
    lastname: 'Symonds',
    age: 25
}

console.log(Person.display.call(Player, Player.age));
console.log(Person.display.apply(Player, [Player.age]));
let fullname = Person.display.bind(Player);
console.log(fullname(Player.age));


