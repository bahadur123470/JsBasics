const User = {
    _username: "Emily",
    _email: "emily@example.com",
    _password: "Password123",

    get _email(){
        return this._email.toUpperCase();
    },
    set _email(value){
        this._email = value;
    }
}
const worker = Object.create(User)
console.log(worker.email)