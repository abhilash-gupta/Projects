let str = 'Programming for Beginners'

// console.log(str.search(/javascript/i))
// console.log('Before update : ' + str);
// str = str.replace(/javascript/i, "Python")
// console.log('After update : ' + str);

let pattern = /rogram/i
console.log(pattern.test(str))
let result = pattern.exec(str)
console.log(`Search was found at ${result.index} and the match in original string is ${result[0]}`);
