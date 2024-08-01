function Person(name, age, gender){
    this.name = name
    this.age = age
    this.gender = gender
    this.display = function(){
        console.log(`Name is ${name}, age is ${age} years, gender is ${gender}`);
    }
}

const person1 = new Person('John', 21, 'male')
const person2 = new Person('Lilly', 20, 'female')
person1.display()
person2.display()
// console.log(person1.name);
// console.log(person2.name);