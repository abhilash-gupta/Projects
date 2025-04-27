let quote = document.querySelector('#quote')
let author = document.querySelector('#author')
let btnGenerate = document.querySelector('#btnGenerate')
let api = 'https://dummyjson.com/quotes'
let quotes = []

btnGenerate.addEventListener('click', setQuote)

function setQuote(){
    let index = Math.floor(Math.random() * 30)
    quote.innerHTML = quotes[index].quote
    author.innerHTML = quotes[index].author
}

async function getQuotes(){
    let response = await fetch(api)
    let data = await response.json()
    quotes = data.quotes
    // console.log(data);
}

getQuotes()