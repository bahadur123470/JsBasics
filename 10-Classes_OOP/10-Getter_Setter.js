class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(Value){
        this._email = Value;
    }
    get password(){
        return `${this._password}Hashed`
    }
    set password(HashedPassword){
        this._password = HashedPassword
    }
}
const user1 = new User("Joe_Goldberg", "joe@example.com", "56789")
console.log(user1.password)
console.log(user1.email)
