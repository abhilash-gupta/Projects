async function getData(){
    let response = await fetch('https://randomuser.me/api/')
    let data = await response.json()
    console.log(data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last);
    
}

getData()