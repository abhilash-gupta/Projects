let i = 1

while (i <= 10){
    if (i == 5 || i == 8){
        i++
        continue
    }
    console.log(`The value of i is ${i}`);
    // if(i == 5){
    //     break
    // }
    i++
}

console.log(`end of while loop`);