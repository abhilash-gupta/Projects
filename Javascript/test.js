// setTimeout(() => {
//     console.log(`this statement is printed after 5 seconds`);
// }, 5000);



let id = setInterval(() => {
    let date = new Date()
    console.log(date.toLocaleTimeString());
}, 1000);


setTimeout(() => {
    clearInterval(id)
    console.log(`interval stopped`);
}, 10000);