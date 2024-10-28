// 123 => divide by 10 => quotient = 12, remainder = 3
function addDigits(number){
    let sum = 0
    while(number > 0){
        let remainder = number % 10
        sum += remainder // sum = sum + remainder
        number = Math.floor(number / 10)
    }
    return sum
}

let number = 512
console.log(`Sum of digits of ${number} is ${addDigits(number)}`);
