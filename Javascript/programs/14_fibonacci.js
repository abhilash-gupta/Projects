// fibonacci series - 0, 1, 1, 2, 3, 5, 8, 13, 21...

let n1 = 0, n2 = 1
console.log(n1);
console.log(n2);

for(let i=3;i<=20;i++){
    let n3 = n1 + n2
    console.log(n3);
    n1 = n2
    n2 = n3
}