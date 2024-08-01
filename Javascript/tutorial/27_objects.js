const Person = {
    name: 'Peter',
    age: 20,
    gender: 'male',
    display: function(){
        console.log(`Name is ${this.name}, age is ${this.age} years, gender is ${this.gender}`);
    },
    setName: function(name1){
        this.name = name1
    },
    getName: function(){
        return this.name
    }
}

// console.log(`Name of person is ${Person.name}`);
// console.log(`Age is ${Person.age} years and gender is ${Person.gender}`);

// Person.name = 'Smith'
Person.setName('John')
// console.log(`Updated name is ${Person.name}`);
console.log(`Updated name is ${Person.getName()}`);
// Person.display()