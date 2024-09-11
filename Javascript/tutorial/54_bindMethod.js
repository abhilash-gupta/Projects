const Person = {
    firstname: 'John',
    lastname: 'Doe',
    display: function(age){
        // return `Fullname is ${this.firstname} ${this.lastname} - ${age}`
        console.log(`Fullname is ${this.firstname} ${this.lastname} - ${age}`)
    }
}

const Player = {
    firstname: 'Smith',
    lastname: 'Peter',
    age: 22
}

// let fullname = Person.display.bind(Player);
// console.log(fullname(Player.age));

let fullname = Person.display.bind(Player, Player.age)
setTimeout(fullname, 3000);
