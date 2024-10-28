// factors = number = 10 => 1, 2, 5, 10
function getFactors(number){
    for(let i=1;i<=number / 2;i++){
        if(number % i === 0){
            console.log(`Number ${i} is a factor of ${number}`);
        }
    }
    console.log(`Number ${number} is a factor of ${number}`);
}

let num = 23
getFactors(num)