// factorial of 3 = 3 * 2 * 1
// factorial of 5 = 5 * 4 * 3 * 2 * 1

factorial = (number) => {
    if(number === 1)
        return 1

    return number * factorial(number - 1)
}

// factorial(3) = 3 * 2 * 1 = 6
console.log(`Factorial of number 3 is ${factorial(3)}`);
console.log(`Factorial of number 5 is ${factorial(5)}`);
console.log(`Factorial of number 7 is ${factorial(7)}`);
