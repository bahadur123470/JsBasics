// Basic     (   so, var is not accessible in this scope or not a good practice as it return different Values in block scope and global scope , it merge the values in global scope )

if(true){
    let a = 1
    const b = 2 
    var c =3 
}
// console.log(a) // ReferenceError: a is not defined
// console.log(b) // ReferenceError: b is not defined
console.log(c) // 3

//Block Scope  ( let and const are block scope variables, they are not accessible outside the block scope )
if(true){
    let a = 10
    const b = 20

    console.log("BlockScope:", a)
    console.log("BlockScope:", b)
}

// Global Scope ( global scope are accessible from any where in the program / in block scope too )

const d = 30
let e = 40
const f = 50
let g = 60
if(true){
    console.log("Global-in-Block:", f)
    console.log("Global-in-Block:", g)
}
console.log("GlobalScope:", d)
console.log("GlobalScope:", e)
console.log("GlobalScope:", f)