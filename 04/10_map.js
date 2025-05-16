const numbers = [11,12,13,14,15,16,17,18,19,20]
const subNumbers = numbers.map( (num) => num - 10 )
// console.log(subNumbers)

const evens = [ 2,4,6,8,10,12,14,16,18,20]
const divided = evens.map( (even) => {
    return even / 2
})
// console.log(divided)

const natural = [ 1,2,3,4,5,6,7,8,9,10]
const square = natural
                    .map( (num) =>  num ** 2)
                    .map( (num) => num + 10)
                    .filter( (num) => num >= 50)
console.log(square)