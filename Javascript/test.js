const x = document.querySelector('#firstNumber')
const y = document.querySelector('#secondNumber')
const btn = document.querySelector('#btnAdd')
const result = document.querySelector('#result')

function add(){
    const sum = parseInt(x.value) + parseInt(y.value)
    result.innerHTML = "The sum of numbers is : " + sum
}