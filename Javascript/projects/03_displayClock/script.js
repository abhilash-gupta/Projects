let clock = document.querySelector('.container')

function getCurrentTime(){
    let date = new Date()
    return date.toLocaleTimeString()
}

setInterval(() => {
    clock.innerHTML = getCurrentTime()
}, 1000);