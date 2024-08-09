try{
    let numerator = 10
    let denominator = 0
    if(denominator == 0){
        throw "denominator cannot be zero"
    }
    else{
        console.log(numerator / denominator);
    }
}
catch(err){
    console.log('Error occured : ' + err);
}
finally{
    console.log('inside finally block');
}

