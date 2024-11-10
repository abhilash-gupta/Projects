function sortArray(arr){
    let length = arr.length
    for(let i=0;i<length - 1;i++){
        for(let j=i+1;j<length;j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    console.log(`Sorted array = ${arr}`);
}

let arr = [12,5,1,50,45,87,78,62]
console.log(`Original array = ${arr}`);
sortArray(arr)