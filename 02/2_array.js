const marvel = [" Iron Man", "Captain America", "Thor",];
const dc = ["Superman", "Batman", "The Flash", "Green Lantern"];

//  Not a good practice to use
marvel.push(dc)
console.log(marvel)

//  Often used but not recommended
const hero = marvel.concat(dc)
console.log(hero)

// Recommended way 
const heroes = [...marvel, ...dc]
console.log(heroes)


const numArr = [1,2,3,[4,5,[6,7,8], [9,10,[11,12,]]], 13, 14, 15];
console.log(numArr)
const flatArr = numArr.flat(Infinity)
console.log(flatArr)


console.log(Array.isArray("bahadur"))
console.log(Array.from("bahadur"))
console.log(Array.from({name: "BAHADUR"})) // interesting 

let value1 = 500 
let value2 = 1200
let value3 = 3000

console.log(Array.of(value1, value2, value3)) 