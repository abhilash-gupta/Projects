checkPrime = (number) => {
    let isPrime = true
    // prime number - not divisible by any other number except 1
    // 1 and negative numbers
    if(number === 1 || number < 1)
        return `Number is not prime`

    else{
        // go from 2 up to number / 2
        for(let i=2;i<=number / 2;i++){
            if(number % i === 0)
                isPrime = false
        }
        if(isPrime)
            return `Number is prime`
        else
            return `Number is not prime`
    }
}

console.log(checkPrime(51));
