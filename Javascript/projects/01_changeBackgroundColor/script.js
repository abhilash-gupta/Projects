let btn = document.querySelector('#changeBGColor')
let body = document.querySelector('body')

function getRandomColor(){
    let str = '0123456789abcdef'
    let color = '#'
    for(let i=1;i<=6;i++){
        color += str[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    return color
}

btn.addEventListener('click', function(){
    //change bg color code
    body.style.backgroundColor = getRandomColor()
})