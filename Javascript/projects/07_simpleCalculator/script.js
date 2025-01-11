let buttons = document.querySelectorAll('.buttons > input')
let textarea = document.querySelector('textarea')
let str = ""

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.value === 'C')
            str = ""
        else if(button.value === '=')
            str = eval(str)
        else
            str += button.value

        textarea.innerHTML = str
    })
})
