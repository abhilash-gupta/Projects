checkOddEven = (number) => {
    if(number % 2 === 0)
        return `Number is EVEN`
    
    return `Number is ODD`
}

console.log(checkOddEven(2));
console.log(checkOddEven(11));
console.log(checkOddEven(52));
