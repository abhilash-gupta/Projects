// function checkNumber(number){

// }

checkNumber = (number) => {
    if(number === 0)
        return `Number is ZERO`
    if(number < 0)
        return `Number is NEGATIVE`
    if(number > 0)
        return `Number is POSITIVE`
}

console.log(checkNumber(0));
console.log(checkNumber(56));
console.log(checkNumber(-14));
console.log(checkNumber(1));

