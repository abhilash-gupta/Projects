// 1. split and reverse 2. algorithm

function reverse(str){
    // return str.split('').reverse().join('')
    let length = str.length
    let stringReverse = ''
    for(let i=0;i<length;i++){
        stringReverse += str[length - 1 - i]
    }
    return stringReverse
}

let string = 'level'
console.log(reverse(string));
