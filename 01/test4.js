const outSideTEmp = 10
let userEmail;
console.log(outSideTEmp)
console.log(userEmail)

const id = Symbol('123')
const anotherID = Symbol('1234')
console.log(id)
console.log(anotherID)
console.log(id === anotherID)

const bigIntValue = BigInt(1234567890123456789012345678901234567890)
const bigNumber = 1232432435345454645657656565n
console.log(bigIntValue)
console.log(bigNumber)

const arr1 = [ "Bahadur", "Aly", "Ali", "Faisal" ]
const arr2 = [ 1, 2, 3, 4, 5 ]
const arr3 = arr1 + arr2
const arr4 = arr1.concat(arr2)
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)

const car = {
    name: "BMW",
    model: "X5",
    year: 2020,
    color: "black",
}
console.log(car)

const myFn = function(){
    console.log("Hello Bahadur")
}
console.log(typeof myFn)
