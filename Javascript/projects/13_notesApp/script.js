let btnCreate = document.querySelector('#btnCreate')
let container = document.querySelector('.container')

btnCreate.addEventListener('click', addNote)

function addNote(){
    let div = document.createElement('div')
    div.classList.add('content')

    let p = document.createElement('p')
    p.classList.add('inputBox')
    p.setAttribute('contenteditable', true)

    let btn = document.createElement('button')
    btn.classList.add('btnRemove')
    btn.innerHTML = 'Remove'

    div.appendChild(p)
    div.appendChild(btn)

    container.appendChild(div)

    let btnRemove = document.querySelectorAll('.btnRemove')
    // btnRemove.addEventListener('click', removeNote)
    btnRemove.forEach(button => {
        button.addEventListener('click', removeNote)
    })
}

function removeNote(event){
    // console.log(event);
    event.target.parentElement.remove()
}