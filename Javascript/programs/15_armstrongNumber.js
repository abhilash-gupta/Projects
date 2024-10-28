// armstrong number = 153 => 1*1*1 + 5*5*5 + 3*3*3
// armstrong number = 153 => 1^3 + 5^3 + 3^3

isArmstrong = (number) => {
    let numberOfDigits = number.toString().length
    let temp = number
    let sum = 0
    while(temp > 0){
        let remainder = temp % 10 // 3
        temp = Math.floor(temp / 10) // 153 / 10 = 15
        sum = sum + Math.pow(remainder, numberOfDigits) // 3^3
    }
    console.log(`value of sum is ${sum}`);
    if(number === sum)
        return true

    return false
}

console.log(`Is armstrong - ${isArmstrong(73)}`);
