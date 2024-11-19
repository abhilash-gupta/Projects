let userImage = document.querySelector('#userImage')
let userName = document.querySelector('#userName')
let userEmail = document.querySelector('#userEmail')
let userPhone = document.querySelector('#userPhone')
let btnGetUser = document.querySelector('#btnGetUser')

async function fetchData(){
    let response = await fetch('https://randomuser.me/api')
    let data = await response.json()
    let name = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
    let email = data.results[0].email
    let phone = data.results[0].phone
    let image = data.results[0].picture.large

    userName.innerHTML = `Name: ${name}`
    userEmail.innerHTML = `Email: ${email}`
    userPhone.innerHTML = `Phone: ${phone}`
    userImage.setAttribute('src', image)
}

btnGetUser.addEventListener('click', function(){
    fetchData()
})