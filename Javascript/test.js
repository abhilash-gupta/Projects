let elementLength = document.querySelector('#passwordLength')
let btnGenerate = document.querySelector('#btnGenerate')
let elementPassword = document.querySelector('.password input')
let btnCopy = document.querySelector('.password button')

btnGenerate.addEventListener('click', generatePassword)
btnCopy.addEventListener('click', copyPassword)

function generatePassword(){
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let specialCharacters = '!@#$%^&*()_+{}|<>?/[]\=-~'

    let allCharacters = uppercase + lowercase + numbers + specialCharacters

    let password = ""
    let length = parseInt(elementLength.value)
    // console.log(elementLength.value);
    console.log(`length = ${allCharacters.length}`);
    
    
    if(length < 6 || length > 20 || isNaN(length)){
        alert('Please provide length between 6 and 20')
        return
    }
    while(length > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }

    elementPassword.value = password
}

function copyPassword(){
    // elementPassword.select()
    // document.execCommand('copy')
    navigator.clipboard.writeText(elementPassword.value)
}