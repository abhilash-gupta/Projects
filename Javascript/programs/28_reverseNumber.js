function reverseNumber(number){
    let reverse = 0
    while(number > 0){
        let temp = number % 10 // 1
        number = Math.floor(number / 10) // 0
        reverse = reverse * 10 + temp // 321
    }
    return reverse
}

let number = 957
console.log(`reverse of ${number} is ${reverseNumber(number)}`);
