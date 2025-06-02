function User(email, password){
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },

        set: function(value) {
            this._password = value;
        }
    })

    this.email = email;
    this.password = password;

}
const user1 = new User("brave@example.com", "a1b2c3d5e6f7")
console.log(user1.email)
console.log(user1.password)