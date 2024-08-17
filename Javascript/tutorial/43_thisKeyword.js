// "use strict"

function Person(){
    this.firstname = "John"
    this.lastname = "Doe"
    this.display = function(){
        return this
    }
}

function myFunction(){
    return this
}

let person1 = new Person()
// console.log(person1.display());
// console.log(this);
console.log(myFunction());


