// for loop 1 up to number
// formula = n * (n + 1) / 2

function sumOfNumbers(n){
    let sum = 0
    for(let i=1;i<=n;i++){
        sum += i // sum = sum + i
    }

    // return sum
    return n * (n + 1) / 2
}

let n = 10
console.log(`Sum of first ${n} numbers is ${sumOfNumbers(n)}`);
