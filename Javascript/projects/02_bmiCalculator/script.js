let btnCalculate = document.querySelector('#calculateBMI')
let result = document.querySelector('#result')

// BMI = weight (kg) / (height * height)

function calculateBMI(){
    let weight = document.querySelector('#weight')
    let height = document.querySelector('#height')
    weight = parseInt(weight.value)
    height = parseInt(height.value)
    if(weight === ''){
        alert('Please provide valid weight in KG')
        return
    }
    if(height === ''){
        alert('Please provide valid height in cm')
        return
    }

    height = height / 100
    let bmi = weight / (height * height)
    return bmi.toFixed(2)
}

btnCalculate.addEventListener('click', function(){
    let bmi = calculateBMI()
    result.innerHTML = `BMI = ${bmi}`
})