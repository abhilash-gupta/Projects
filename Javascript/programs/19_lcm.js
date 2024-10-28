// LCM = 2, 3 = 6

function getLCM(num1, num2){
    let lcm = num1 > num2 ? num1 : num2

    while(true){
        if(lcm % num1 == 0 && lcm % num2 == 0)
            break

        lcm++
    }
    return lcm
}

let num1 = 50, num2 = 100
console.log(`LCM of numbers ${num1} and ${num2} is ${getLCM(num1, num2)}`);
