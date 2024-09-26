function checkNumber(number){
    if(number === 0)
        return 'Number is ZERO'

    if(number > 0)
        return 'Number is POSITIVE'

    if(number < 0)
        return 'Number is NEGATIVE'
}

console.log(checkNumber(0));
console.log(checkNumber(100));
console.log(checkNumber(-15));
