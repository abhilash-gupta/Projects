let array = [11,12,13,14,11]
let set1 = new Set()

array.forEach((item) => {
    item = item + 10
    set1.add(item)
})
set1.add(31)
set1.add(32)
console.log(set1);