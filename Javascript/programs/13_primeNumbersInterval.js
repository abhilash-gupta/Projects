// prime numbers - 2, 3, 5, 7, 11, 13, 17, 19, 23

isPrime = (number) => {
    if(number <= 1)
        return false

    for(let i=2;i<=number / 2;i++){
        if(number % i === 0)
            return false
    }

    return true
}

let lowerLimit = 11, upperLimit = 50
for(let i=lowerLimit;i<=upperLimit;i++){
    if(isPrime(i))
        console.log(`Number ${i} is a Prime Number`); 
}