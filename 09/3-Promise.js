const testPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("testPromise resolved after 2 seconds");
        resolve();
    }, 2000)
})
testPromise.then(function(){
    console.log("testPromise then called");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise 2 resolved after 3 second");
        resolve();
    }, 3000)
}).then(function(){
    console.log("Promise 2 then called Successfully");
})

const promiseArrow1 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log("PromiseArrow 1 resolved ")
        resolve()
    }, 5000)
})
promiseArrow1.then( () => {
    console.log("PromiseArrow 1 then called Successfully")
})

new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log("ArrowPromise 2 resolved after 6 seconds")
        resolve();
    }, 6000)
}).then( () => {
    console.log("ArrowPromise 2 then called Successfully")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("User Data fetched by Promise")
        resolve( {username: "Bahadur", email: "bahadur@example.com"})
    }, 1000)
}).then( (userData) => {
    console.log(`User Data => Username: ${userData.username}, Email: ${userData.email}`);
})

const userPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("userPromise fetched user data ")
        // resolve({
        //     username: "Brave",
        //     email: "brave@example.com"
        // })
        resolve([
            {username: "Brave", email: "brave@example.com"},
            {username: "Hero", email: "Hero@example.com"},
            {username: "Superman", email: "super@exxample.com"}
        ])
    }, 1500)
})
userPromise.then(  (users) => {
    console.log("User Data Fetched Successfully");
    users.forEach(user => {
        console.log(`Username: ${user.username}, Email: ${user.email}`);
    });
})

const promiseWithError = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = false
        if(!error){
            resolve({username: "Ben Stokes", email: "ben.stokes@example.com", password: "12345"})
        }
        else{
            reject("Error: Unable to fetch user data")
        }
    }, 1000)
})
promiseWithError.then( (user) => {
    console.log(user)
    return user.username
}).then( (username) => {
    console.log(username)
}).catch( (error) => {
    console.log(error)
}).finally( () => console.log("Promise execution completed"))
