const myName = "Bahadur Ali"
const myAge = 22
const myHobby = "Coding in JavaScript"

console.log(`My name is ${myName}. I am ${myAge} years old. My hobby is ${myHobby}`)

const name = new String ("Bahadur Ali")
console.log(name);
console.log(name[2]);
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(5));
console.log(name.charCodeAt(5));
console.log(name.indexOf("r"));

const newName = name.substring(0, 5)
console.log(newName);

const newName2 = name.slice(0, 5)
console.log(newName2);
const newName2a = name.slice(-11, 4)
console.log(newName2a)

const newName3 = "  Bahadur Ali "
console.log(newName3);
console.log(newName3.trim());

const url = "https://www.bahadur.com/bahadur%20ali"
console.log(url.replace("%20", "__"));

console.log(url.includes("ali"))
console.log(url.includes("present"))

let fruits = "banana, apple, orange, mango"
console.log(fruits.split(","))