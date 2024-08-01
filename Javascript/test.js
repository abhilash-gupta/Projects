function Person(name, age, gender){
    this.name = name
    this.age = age
    this.gender = gender
    this.display = function(){
        console.log(`Name is ${this.name} (${this.gender}) and age is ${this.age} years`);
    }
}

const person1 = new Person('John', 21, 'male')
const person2 = new Person('John', 21, 'male')
person1.display()
person2.display()
console.log(`person1 == person2: ${person1 == person2}`);
console.log(`person1 === person2: ${person1 === person2}`);
