const programming = ["JS", "TS", "PY", "CPP", "CS"]
programming.forEach( function (shortcut){
    // console.log(shortcut)
})

const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.forEach(function (num){
    // console.log(`Index of ${num} is ${numbers.indexOf(num)}`)
    // console.log(`${num} is on index ${numbers.indexOf(num)}`)
})


const mernDeveloper = ["Bahadur", "Brave", "Ahad", "Ruhul"]
mernDeveloper.forEach( (name) => {
    // console.log(` ${name} is a full Stack developer`)
})

const developerSalary = new Map ([
   ["Bahadur", 7000],
   ["Brave", 8000],
   ["Ahad", 5000],
   ["Ruhul", 6000]
]) 
developerSalary.forEach( (salary, name) => {
    // console.log(` ${name} is getting ${salary}`)
})
const avengers = [ "Iron Man", "Captain America", "Thor", "Black Widow", "Hulk"]
avengers.forEach( (item, index, arr)=> {
    // console.log(item, index, arr)
})

const cravingCafe = [
    {
        itemName: "Lotus cake",
        price: 250,
    },
    {
        itemName: "Cheese cake",
        price: 350,
    },
    {
        itemName: "Chocolate cake",
        price: 300,
    },
    {
        itemName: "Strawberry cake",
        price: 320,
    },
    {
        itemName: "Fruit cake",
        price: 280,
    }
]
cravingCafe.forEach( (item) => {
    console.log(item.itemName, ":" , item.price)
})