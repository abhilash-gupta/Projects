let str = "Programming for Beginners"
let numerator = 10
let denominator = 0

try{
    // console.logd(str);
    if(denominator == 0){
        throw "denominator is zero"
    }
    let result = numerator / denominator
    console.log(`Result = ${result}`); 
}
catch(err){
    console.log(`Error Occured - ${err}`);
}
finally{
    console.log(`inside finally block`);
}

