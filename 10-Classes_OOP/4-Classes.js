class GirlsSquad {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;  
    }

    encryptAge(){
        return `${this.age}/15`
    }
    changeNameText(){
        return `${this.name.toUpperCase()}`
    }
}
const girl1 = new GirlsSquad("Alice", 14, "New York");
console.log(girl1.encryptAge()); // Output: "14/15"
console.log(girl1.changeNameText()); // Output: "ALICE"


function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
User.prototype.encryptAge = function() {
    return `${this.age}/15`;
}
User.prototype.changeNameText = function() {
    return `${this.name.toUpperCase()}`;
}
const user1 = new User("Bob", 16, "Los Angeles");
console.log(user1.encryptAge()); // Output: "16/15"
console.log(user1.changeNameText()); // Output: "BOB"