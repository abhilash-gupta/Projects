// hcf / gcd - 5, 10 = 1, 5

function getHCF(num1, num2){
    let hcf = 0
    for(let i=1;i<=num1 && i<=num2;i++){
        if(num1 % i == 0 && num2 % i == 0)
            hcf = i
    }

    return hcf
}

let num1 = 60, num2 = 72
console.log(`HCF of numbers ${num1} and ${num2} is ${getHCF(num1, num2)}`);
