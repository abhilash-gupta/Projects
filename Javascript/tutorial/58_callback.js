function add(num1, num2, callback){
    let sum = num1 + num2
    setTimeout(() => {
        callback(sum)
    }, 3000);
    console.log('done');
    
    // return num1 + num2
}

function display(sum){
    console.log(`sum is ${sum}`);
}

add(10, 30, display)
// display(result)