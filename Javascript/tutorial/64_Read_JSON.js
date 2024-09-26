async function getData(){
    let response = await fetch('https://randomuser.me/api/')
    let data = await response.json()
    console.log(`Fullname : ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`);
    console.log(`Gender : ${data.results[0].gender}`);
    console.log(`Email ID : ${data.results[0].email}`);
    console.log(`Phone : ${data.results[0].phone}`);
}

getData()