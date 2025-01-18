let date = document.querySelector('#date')
let btnCalculate = document.querySelector('#btnCalculate')
let result = document.querySelector('#result')

btnCalculate.addEventListener('click', calculateAge)
// console.log(new Date().toISOString().substring(0, 10));

date.max = new Date().toISOString().substring(0, 10)

function calculateAge(){
    if(date.value === ''){
        alert('Please provide valid date')
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
        dayDiff += getDaysinMonth(startDate.getFullYear(), startDate.getMonth())
    }

    result.innerHTML = `Age is : ${yearDiff} years, ${monthDiff} months and ${dayDiff} days`
}

function getDaysinMonth(year, month){
    return new Date(year, month, 0).getDate()
}