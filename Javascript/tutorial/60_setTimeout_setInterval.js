// setTimeout(() => {
//     console.log(`this statement is printed after 3 seconds`);
// }, 3000);

let id = setInterval(() => {
    let date = new Date()
    console.log(date.toLocaleTimeString());
}, 1000);


setTimeout(() => {
    clearInterval(id)
    console.log('stopped');
}, 10000);
