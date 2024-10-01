function checkArmstrongNumber(number){

    let sum = 0, temp = number
    let length = number.toString().length
    while(temp > 0){
        let remainder = temp % 10
        temp = parseInt(temp / 10)
        sum += Math.pow(remainder, length)
        // console.log(sum);
        
    }

    // console.log(length + " " + temp + " " + sum);
    

    if(number === sum)
        return `Armstrong number`

    return `Not armstrong number`

}

console.log(checkArmstrongNumber(153));
