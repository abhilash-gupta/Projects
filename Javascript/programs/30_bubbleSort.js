function bubbleSort(numbers){
    let length = numbers.length
    for(let i=0;i<length;i++){
        for(let j=0;j<length - 1 - i;j++){
            if(numbers[j] > numbers[j+1]){
                [numbers[j], numbers[j+1]] = [numbers[j+1], numbers[j]]
            }
        }
        // console.log(numbers);
    }
    return numbers
}

let arr = [87,54,21,65,3,47,59,12,43]
console.log(`original array = ${arr}`);
console.log(`sorted array = ${bubbleSort(arr)}`);

// i = 0 - length of array
// j = 0 - length - 1