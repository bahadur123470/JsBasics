class User {
    constructor(name){
        this.name = name;
    }
    logMessage(){
        console.log(`User: ${this.name}`);
    }
    static createPassword(){
        return `12345`;
    }
}
const user1 = new User('John');
user1.logMessage()
// console.log(user1.createPassword()); // static methods cannot be called on instances

class Admin extends User {
    constructor(name, role){
        super(name);
        this.role = role
    }
}
const admin1 = new Admin('Jane', 'Admin');
admin1.logMessage();
console.log(admin1.createPassword()) // static methods can be called on the class itself