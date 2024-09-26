let promise = new Promise(function(resolved, rejected){
    // resolved('success')
    // rejected('failed')
    setTimeout(() => {
        resolved('pass')
    }, 3000);
})

promise.then(
    function(value){
        console.log(`success - ${value}`);
    },
    function(failure){
        console.log(`failure - ${failure}`);
    }
)

console.log(promise);
