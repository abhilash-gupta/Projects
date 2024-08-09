const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 21,
    gender: 'male'
}

for (const key in person) {
    console.log(`${key} = ${person[key]}`);
}