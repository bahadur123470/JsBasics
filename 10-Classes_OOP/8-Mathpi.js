// Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.PI.toFixed(2)); // 3.14
// console.log(Math.PI.toFixed(4)); // 3.1416
// console.log(Math.ceil(Math.PI)); // 4
// console.log(Math.floor(Math.PI)); // 3
// console.log(Math.trunc(Math.PI)); // 3
// console.log(Math.round(Math.PI)); // 3

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5; // Attempt to change the value
// console.log(Math.PI); // Still 3.141592653589793

const piDescriptor =Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(piDescriptor);
const bread = {
    name: "Brown Bread",
    price: 150,
    isAvailable: true,

    notAvailable: function(){
        console.log(`${this.name} is not available`);
    }
}
// console.log(bread)
console.log(Object.getOwnPropertyDescriptor(bread, "name"));
Object.defineProperty(bread, "name", {
    writable: false,
    enumerable: true,
    configurable: true
})
// console.log(Object.getOwnPropertyDescriptor(bread, "name"));
for (let [key, value] of Object.entries(bread)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}