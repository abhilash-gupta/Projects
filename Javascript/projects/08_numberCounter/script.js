let buttons = document.querySelectorAll('.buttons > input')
let counter = document.querySelector('#count')
let count = 0

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.value === 'Increase')
            count++
        else if(button.value === 'Decrease')
            count--
        else
            count = 0

        counter.innerHTML = count
    })
})
