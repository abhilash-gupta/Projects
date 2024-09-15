function oneSecond(){
    console.log(`1 second`);
}
function twoSecond(){
    console.log(`2 second`);
}
function threeSecond(){
    console.log(`3 second`);
}

setTimeout(() => {
    threeSecond()
}, 3000);

setTimeout(() => {
    twoSecond()
}, 2000);

setTimeout(() => {
    oneSecond()
}, 1000);