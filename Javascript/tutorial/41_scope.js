let name = 'Programming For Beginners' // global scope
console.log(name);

function myFunction(){
    let nameFunction = "inside function" // function scope
    console.log(nameFunction);
    console.log("inside function : " + name); // global scope
}

// console.log("outside function - " + nameFunction); // not allowed

myFunction()

{
    blockScope = "John"
    console.log("within block = " + blockScope);
}

console.log("outside block = " + blockScope); // not allowed if not global
