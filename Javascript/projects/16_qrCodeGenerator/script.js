let input = document.querySelector('#input')
let btnGenerateQR = document.querySelector('#generateQR')
let imageQR = document.querySelector('#imageQR')

function generateQR(){
    if(input.value === ''){
        alert('Please provide Valid Input')
        return
    }

    imageQR.setAttribute('src', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value)
}

btnGenerateQR.addEventListener('click', generateQR)
