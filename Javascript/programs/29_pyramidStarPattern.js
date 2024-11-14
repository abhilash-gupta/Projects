let rows = 7

for(let i=1;i<=rows;i++){
    let str = ''
    for(let j=0;j<=rows-1-i;j++){
        str += ' ' // str = str + ' '
    }
    for(let j=0;j<i;j++){
        str += '* '
    }
    console.log(str);
}