let date = new Date()
let hour = date.getHours()
console.log(`Current hour : ${hour}`);
if(hour <= 12){
    console.log(`Good morning!`);
}
else if(hour <= 16){
    console.log(`Good afternoon!`);
}
else{
    console.log(`Good evening!`);
}