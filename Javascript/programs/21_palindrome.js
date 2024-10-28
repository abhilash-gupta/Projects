// palindrome string => madam = madam
// 1. algorithm 2. reverse and join

function isPalindrome(str){
    // let length = str.length
    // for(let i=0;i<length;i++){
    //     if(str[i] !== str[length - 1 - i])
    //         return false
    // }
    // return true

    if(str === str.split('').reverse().join(''))
        return true
    else
        return false
}

console.log(isPalindrome('level'));
