let person = {
    firstname: 'Smith',
    lastname: 'Maxwell',
    age: 23
}

// console.log(`${person.firstname} ${person.lastname}`);
let {firstname, lastname, age, country = "US"} = person
console.log(`${firstname} ${lastname} - (${age} years) ${country}`);

let str = "JavaScript"
let [c1,c2,c3,c4,c5] = str
console.log(c1,c2,c3,c4,c5);

let arr = [1,2,3,4,5]
let [a1,a2,a3,a4] = arr
console.log(a1,a2,a3,a4);

let first = "John"
let last = "Doe"

console.log(`Before Swapping = ${first} ${last}`);
[first, last] = [last, first]
console.log(`After Swapping = ${first} ${last}`);


