function getResult(num1, operator, num2){
    let result = 0
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    switch (operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
    
        default:
            result = `Invalid Operation`
            break;
    }

    return result
}


const readline = require('readline')
const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter first number - ', function(num1){
    rl.question('Enter the operator - ', function(operator){
        rl.question('Enter second number - ', function(num2){

            console.log(`Result is ${getResult(num1, operator, num2)}`);
            
            rl.close()
        })
    })
})