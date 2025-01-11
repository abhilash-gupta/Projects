let inputBox = document.querySelector('#task')
let btnAdd= document.querySelector('#add')
let listContainer = document.querySelector('#list-container')

btnAdd.addEventListener('click', addTask)
listContainer.addEventListener('click', handleListItem)

function addTask(){
    if(inputBox.value === ''){
        alert('Please provide valid task')
        return
    }
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let remove = document.createElement('button')
    remove.innerHTML = 'Remove'
    li.appendChild(remove)
    inputBox.value = ''
    saveData()
}

function handleListItem(e){

    if(e.target.tagName === 'LI'){
        let updatedTask = prompt('Enter updated task')
        e.target.innerHTML = `${updatedTask} <button>Remove</button>`
    }
    else if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove() 
    }
    saveData()
}

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem('data')
}

loadData()