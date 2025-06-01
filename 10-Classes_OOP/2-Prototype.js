// function menu (itemName, price){
//     this.itemName = itemName
//     this.price = price
// }
// menu.prototype.increment = function () {
//     this.price++ 
// }
// menu.prototype.printMe = function () {
//     console.log(`Price of ${this.itemName} is ${this.price}`)
// }
// const fries = new menu("Fries", 100)
// const burger = new menu("Burger", 200)
// const coffee = new menu("Coffee", 350)

// fries.printMe() // Price of Fries is 100
// fries.increment()
// fries.printMe() // Price of Fries is 101


// let avengers = ["thor", "ironman", "captain america", "spiderman"]
// let avengersPowers = {
//     thor: "thunder",
//     ironman: "suit",
//     "captain america": "shield",
//     spiderman: "web"
// }
// Object.prototype.getPower = function (name) {
//     console.log("These are avengers getPower method")
// }
// Array.prototype.superPower = function() {
//     console.log("These are avengers superPower method")
// }
// avengers.getPower();
// avengers.superPower();
// avengersPowers.getPower();
// // avengersPowers.superPower("ironman");  // TypeError: avengersPowers.superPower is not a function

const teacher = {
    taughtClass: true,
    takeTest: "Data Structures",
}
const student = {
    isStudent: true,
}
const cr = {
    isCR: true,
    handleClass: true 
}

Object.setPrototypeOf(cr, teacher);

let hod = "  ABDUL KALAM  "

String.prototype.trueLength = function () {
    console.log(`${this}`)
    // console.log(`${this.name}`)   // This will log undefined because `name` is not a property of the string object
    console.log(`True length of the string is ${this.trim().length}`)
}
hod.trueLength()
"Apple".trueLength();
"Express JS".trueLength();
"  Hello World!  ".trueLength(); 