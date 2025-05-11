const sym = Symbol("BA")

const  accountUser = {
    username : "Bahadur ",
    full_name: "Bahadur Ali",
    email: "bahadur@google.com",
    age: 20,
    occupation: "Student",
    city: "RahimYar Khan",
    country: "Pakistan",
    [sym]: "BA"
}
console.log(accountUser);
console.log(accountUser["email"]);
console.log(typeof accountUser[sym])

accountUser.occupation = "Mern Stack-Developer"
console.log(accountUser.occupation)
Object.freeze(accountUser)
accountUser.occupation = "Web developer"
console.log(accountUser.occupation) // it will not change the value of occupation


accountUser.workdays = function(){
    console.log("Monday to Friday")
}
console.log(accountUser.workdays())

accountUser.offdays = function(){
    console.log("Saturday and Sunday")
}
console.log(accountUser.offdays())

accountUser.duty = function(){
    console.log(`My name is ${this.full_name}. My workdays are ${this.workdays} and my offdays are ${this.offdays}`)
}
console.log(accountUser.duty())