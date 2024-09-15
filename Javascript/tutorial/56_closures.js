function addCounter(){
    let counter = 0
    function plus(){
        counter += 1
        console.log(`count = ${counter}`);
    }
    return plus
}

let myFunction = addCounter()
myFunction()
myFunction()

// addCounter()
// addCounter()
// console.log(`count = ${counter}`);
