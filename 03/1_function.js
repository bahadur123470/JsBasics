function namespell(){
    console.log("B")
    console.log("A")
    console.log("H")
    console.log("A")
    console.log("D")
    console.log("U")
    console.log("R")
}
namespell()

function addingNumber(num1, num2){
    console.log(num1 + num2)
}
// addingNumber(5,7)

function  addNumber(number1, number2){
// Correct but not good practice as there is space saving method

    // let result = number1 + number2
    // return result

    return number1 + number2
}
let result = addNumber(5,7)
console.log("Result:", result)

function loginUserMessage(username){
    if(!username){
        console.log("Please enter your username to login")
        return
    }
    return `Welcome ${username} , you have successfully login`
}
console.log(loginUserMessage("Bahadur"))


function totalMarks(...subjectMarks){
    return subjectMarks
}
console.log(totalMarks(67,86,43,75,24,69,79))


const drinks = {
    name: "Lemon Malt",
    price: 89.99
}
function drinksDetails(anydrink){
    console.log(`Name of drink: ${anydrink.name} is available at price of ${anydrink.price}`)
}
drinksDetails(drinks)
drinksDetails({
    name: "Peach Malt",
    price: 99.99
})

const myValues = [ 100, 1000, 10000, 100000, 1000000]
function findMaxValue(...numbers){
    return Math.max(...numbers)
}
console.log(findMaxValue(...myValues))

function fourthValue(getValue){
    return getValue[3]
}
console.log(fourthValue(myValues))