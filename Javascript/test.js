let btnCreate = document.querySelector('#createNote')
let container = document.querySelector('.container')
let btnRemove = ""

btnCreate.addEventListener('click', addNote)

function addNote(){
    let div = document.createElement('div')
    div.classList.add('content')

    let p = document.createElement('p')
    p.setAttribute('contenteditable', true)
    p.classList.add('inputBox')

    let btn = document.createElement('button')
    btn.innerHTML = 'Remove'
    btn.classList.add('btnRemove')

    div.appendChild(p)
    div.appendChild(btn)

    container.appendChild(div)

    btnRemove = document.querySelector('.btnRemove')
    btnRemove.addEventListener('click', removeNote)
    
}

function removeNote(event){
    // console.log(event);
    event.target.parentElement.remove()
}