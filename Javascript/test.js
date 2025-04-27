let input = document.querySelector('#input')
let btnGenerateQR = document.querySelector('#generateQR')
let image = document.querySelector('#qrScanner')

function generateQR(){
    if(input.value === ''){
        alert('Please provide valid input')
        return
    }

    image.setAttribute('src', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value)
}

btnGenerateQR.addEventListener('click', generateQR)