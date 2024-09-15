function makeAdder(x){
    return function(y){
        return x + y
    }
}

let add5 = makeAdder(5)
let add10 = makeAdder(10)
console.log(`sum is ${add5(10)}`)
console.log(`sum is ${add5(45)}`)
console.log(`sum is ${add10(100)}`)