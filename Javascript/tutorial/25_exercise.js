let numbers = [1,2,3,4,5,6,7,8,9,10]
let number = 3

const length = numbers.length
let index = 0
while(index < 10){
    let result = number * numbers[index]
    index++
    // if(index % 2 == 0)
        console.log(`${number} * ${index} = ${result}`)
}