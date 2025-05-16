const fruits = [ "apple", "banana", "cherry", "date", "berry", "watermelon", "grape", "mango", "pineapple", "peach" ];
for (const fruit of fruits) {
    // console.log(fruit)
}

const number = [1,2,3,4,5,6,7,8,9,10]
for (const num of number){
    // console.log(`Digit ${num}`)
}

const iphone = ["16E", "16", "16 Plus", "16 Pro", "16 Pro Max"]
for (const model of iphone){
    // console.log(`2025 series of iphone include ${model}`)
}

const workers = new Map ([
    ["Bahadur", { age: "21", city: "Bahawalpur"}],
    ["Ali", { age: 22 , city: "Lahore" }],
    ["Ahmed",  { age: 24 , city: "Islamabad"}],
    ["Hassan",  { age:  27, city: "Karachi"}],
    ["Sajid",  { age: 30 , city: "Multan"}],
    ["Sami",  { age:  32, city: "Quetta"}]
])
for (const [name, info] of workers) {
    // console.log(`My name is ${name}, am ${info.age} years old and i lives in ${info.city}`)
}

const statusCodes = [200,202,301,307,401,404,500,502]
for (const code of statusCodes) {
    if( code === 404){
        console.log(`${code} is used for not found`)
        // break  or continue
    }
    console.log(`Http status code ${code}`)
}
