let userNumber = document.querySelector('#number')
let btnSubmit = document.querySelector('#submit')
let divResult = document.querySelector('.result')

btnSubmit.addEventListener('click', () => {
    let number = userNumber.value
    if(number === ''){
        alert('Please provide valid number')
        return
    }
    number = parseInt(number)
    divResult.innerHTML = ""
    for(let i=1;i<=10;i++){
        let para = document.createElement('p')
        let result = document.createTextNode(`${number} * ${i} = ${number * i}`)
        para.append(result)
        divResult.append(para)
    }
    
})
