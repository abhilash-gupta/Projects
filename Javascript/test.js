let number = 1234
let numberInString = number.toString()
let length = numberInString.length
let sum = 0
for(let i=0;i<length;i++){
    sum += parseInt(numberInString[i])
}

console.log(sum);
