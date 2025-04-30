let buttons = document.querySelectorAll('.container button')
let toastBox = document.querySelector('#toastBox')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let toast = document.createElement('div')
        if(button.innerHTML === 'Success')
            toast.innerHTML = 'Success'
        if(button.innerHTML === 'Error'){
            toast.innerHTML = 'Error'
            toast.classList.add('error')
        }
        if(button.innerHTML === 'Invalid'){
            toast.innerHTML = 'Invalid'
            toast.classList.add('invalid')
        }
        toast.classList.add('toast')
        toastBox.appendChild(toast)

        setTimeout(() => {
            toast.remove()
        }, 5000);
    })
})