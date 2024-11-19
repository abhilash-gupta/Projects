// generate random number between 1 to 100
function getRandomNumber(){
    let random = Math.ceil(Math.random() * 100)
    return random
}

let userInput = document.querySelector('#userInput')
let submitBtn = document.querySelector('#submit')
let result = document.querySelector('#result')

let randomNumber = getRandomNumber()

function submitButtonClick(){
    let userGuess = parseInt(userInput.value)
    if(userGuess < randomNumber){
        result.innerHTML = "Your guess is too low"
        userInput.value = ""
    }
    else if(userGuess > randomNumber){
        result.innerHTML = "Your guess is too high"
        userInput.value = ""
    }
    else if(userGuess === randomNumber)
        result.innerHTML = "Your guess CORRECT"
}

submitBtn.addEventListener('click', function(){
    submitButtonClick()
})