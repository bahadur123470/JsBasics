// const employee = {
//     name: "John Doe",
//     age: 30,
//     position: "Software Engineer",
//     salary: 60000,
    
//     getDetails: function() {
//         console.log(`Name: ${this.name} and Position: ${this.position}`)
//         console.log(this)
//     }
// }
// console.log(employee.salary)
// console.log(employee.getDetails());
// console.log(this)


function Worker(name, age, position, salary){
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary

    this.greeting = function(){
        console.log(`Welcome ${this.name}`);
    }

    return this;
}
const worker1 = new Worker("John Doe", 30, "Software Engineer", 120000)
const worker2 = new Worker("Jane Smith", 28, "Data Scientist", 110000)
console.log(worker1.constructor);
console.log(worker2)