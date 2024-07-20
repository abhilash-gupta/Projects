let numbers = [11,24,635,73,39,73,39,76]

console.log('Array length : ' + numbers.length);
console.log('to string : ' + numbers.toString());
console.log('last element : ' + numbers[numbers.length - 1]);
console.log('join array :' + numbers.join(' * '))
numbers.push(100)
console.log('updated array after pushing element : ' + numbers)
numbers.pop()
console.log('updated array after popping element : ' + numbers)
console.log('section of array : ' + numbers.slice(0, 5));
numbers.splice(0, 1, 1, 2)
console.log('updated array after splice : ' + numbers);
