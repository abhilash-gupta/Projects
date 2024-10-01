findLargest = (num1, num2, num3) => {
    if(num1 >= num2 && num1 >= num3)
        return `${num1} is Largest`

    else if(num2 >= num1 && num2 >= num3)
        return `${num2} is Largest`

    return `${num3} is Largest`
}

console.log(findLargest(108,22,3));
console.log(Math.max(108,22,3,400,501,1000));

