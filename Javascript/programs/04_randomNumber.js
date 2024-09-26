function getRandomNumber(){
    return Math.ceil(Math.random() * 6)
}

for (let index = 0; index < 5; index++) {
    console.log(getRandomNumber());
}

