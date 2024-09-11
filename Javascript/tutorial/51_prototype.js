function Person(firstname, lastname){
    this.firstname = firstname
    this.lastname = lastname
}

Person.prototype.fullname = function(){
    return `${this.firstname} ${this.lastname} is the full name`
}

function Player(firstname, lastname, age){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
}

Player.prototype.playerDisplay = function(){
    return `${this.firstname} ${this.lastname} - ${this.age}`
}

const player1 = new Player('John', 'Doe', 22)
console.log(Object.getPrototypeOf(Player.prototype));
Object.setPrototypeOf(Player.prototype, Person.prototype)
console.log(Object.getPrototypeOf(Player.prototype));

console.log(player1.fullname());
