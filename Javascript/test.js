let date = document.querySelector('#date')
let btnCalculate = document.querySelector('#btnCalculate')

btnCalculate.addEventListener('click', calculateAge)
// date.max = new Date().toISOString().split('T')[0]

function calculateAge(){
    if(date.value === ''){
        alert('Please provide date input')
        return
    }
    let startDate = new Date(date.value)
    let endDate = new Date()
    
    let yearDiff = endDate.getFullYear() - startDate.getFullYear()
    let monthDiff = endDate.getMonth() - startDate.getMonth()
    if(monthDiff < 0){
        yearDiff--
        monthDiff += 12
    }
    let dayDiff = endDate.getDate() - startDate.getDate()
    if(dayDiff < 0){
        if(monthDiff > 0){
            monthDiff--
        }
        else{
            yearDiff--
            monthDiff = 11
        }
        dayDiff += daysInMonth(startDate.getFullYear(), startDate.getMonth())
    }

    alert(`${yearDiff}, ${monthDiff}, ${dayDiff}`)
}

function daysInMonth(year, month){
    return new Date(year, month, 0).getDate()
}