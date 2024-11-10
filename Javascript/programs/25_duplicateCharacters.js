function duplicateCharacters(str){
    let characterCount = {}
    for(let i=0;i<str.length;i++){
        let character = str[i]
        characterCount[character] = (characterCount[character] || 0) + 1
    }

    for (const key in characterCount) {
        if(characterCount[key] > 1){
            console.log(`Duplicate character = ${key}, count = ${characterCount[key]}`);
        }
    }
}

let str = 'javascript tutorial'
duplicateCharacters(str)