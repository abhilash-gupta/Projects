let elementLength = document.querySelector('#passwordLength')
let btnGenerate = document.querySelector('#btnGenerate')
let inputPassword = document.querySelector('.password input')
let btnCopy = document.querySelector('.password button')

btnGenerate.addEventListener('click', generatePassword)

function generatePassword(){
    let length = parseInt(elementLength.value)
    if(length < 6 || length > 20 || isNaN(length)){
        alert('Please provide length between 6 and 20')
        return
    }

    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let specialCharacters = '!@#$%^&*()_+-={}|[]\<>?/~'

    let allCharacters = uppercase + lowercase + numbers + specialCharacters
    let password = ""

    while(length > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }

    inputPassword.value = password
    
}

btnCopy.addEventListener('click', () => {
    // inputPassword.select()
    // document.execCommand('copy')

    navigator.clipboard.writeText(inputPassword.value)
})