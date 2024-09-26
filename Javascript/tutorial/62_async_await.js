async function display(){
    // return new Promise(function(resolved, rejected){
    //     // resolved('hello')
    //     rejected('failed')
    // })
    return 'Hello'
}

// display().then(
//     function(value){
//         console.log(`success - ${value}`);
//     },
//     function(error){
//         console.log(`failure - ${error}`);
//     }
// )

async function getData(){
    let response = await fetch('https://randomuser.me/api/')
    let data = await response.json()
    console.log(data.results[0].name.first);
}

getData()

