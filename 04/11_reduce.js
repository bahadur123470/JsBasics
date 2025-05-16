const number = [ 1,2,3,4,5]
const redNum = number.reduce( function (acc, current) {
    // console.log(`acc : ${acc}, current: ${current}`)
    return acc + current
}, 0) 
// console.log(redNum)

const digits = [ 11,12,13,14,15]
const sumDigits = digits.reduce( (acc, current)=>{
    // console.log(`acc : ${acc}, current: ${current}`)
    return acc + current
}, 0)
// console.log(sumDigits)

const num = [21,22,23,24,25]
const sumNum = num.reduce( (acc, current) => acc + current, 0)
// console.log(sumNum)

const shoppingCart = [
    { itemName: "Wireless Mouse", price: 1500 },
    { itemName: "Keyboard", price: 2200 },
    { itemName: "USB-C Cable", price: 500 },
    { itemName: "Laptop Stand", price: 1800 },
    { itemName: "Bluetooth Speaker", price: 3200 },
    { itemName: "Notebook", price: 250 },
    { itemName: "Pen Pack", price: 100 },
    { itemName: "Desk Lamp", price: 2700 },
    { itemName: "Water Bottle", price: 800 },
    { itemName: "Phone Charger", price: 1200 },
    { itemName: "Backpack", price: 3500 },
    { itemName: "Sticky Notes", price: 150 }
];
const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
// console.log(totalPrice)

const clothingCart = [
    { itemName: "Plain White T-Shirt", category: "Shirt", size: "M", price: 1200 },
    { itemName: "Blue Jeans", category: "Pants", size: "32", price: 2800 },
    { itemName: "Hooded Sweatshirt", category: "Hoodie", size: "L", price: 3500 },
    { itemName: "Formal Shirt", category: "Shirt", size: "M", price: 2000 },
    { itemName: "Black Trousers", category: "Pants", size: "34", price: 2500 },
    { itemName: "Denim Jacket", category: "Jacket", size: "L", price: 4200 },
    { itemName: "Sports Shorts", category: "Shorts", size: "M", price: 1000 },
    { itemName: "Cotton Kurta", category: "Traditional", size: "M", price: 1500 },
    { itemName: "Chino Pants", category: "Pants", size: "32", price: 2300 },
    { itemName: "Printed T-Shirt", category: "Shirt", size: "S", price: 1400 },
    { itemName: "Raincoat", category: "Jacket", size: "L", price: 3100 },
    { itemName: "Sweatpants", category: "Pants", size: "M", price: 1900 }
];
const totalShoppingPrice = clothingCart.reduce( (acc, value) =>{
    console.log(` acc : ${acc}, price of this item : ${value.price}`)
    return acc + value.price
}, 0)
console.log(`Total amount to be paid : ${totalShoppingPrice}`)