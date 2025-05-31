
const tryCatchPromise =  new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = false
        if (!error){
            resolve({username: "John Doe", email: "john.doe@example.com", password: "123"})
        }
        else {
            reject("Error: Unable to fetch user data")
        }
    }, 2000)
})
async function fetchPromiseData() {
    try {
        const response = await tryCatchPromise
    console.log(response)
    }
    catch (error){
        console.log(error)
    }
}
fetchPromiseData()


const getAllUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
        // console.log(`Total Users: ${data.length}`)
        // data.forEach(user => {
        //     console.log(`Name: ${user.name}, Email: ${user.email}`)
        // })
    }
    catch (error) {
        console.log("Error fetching users:", error)
    }
}
getAllUsers()

fetch("https://api.github.com/users/bahadur123470")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log("Error fetching users:", error)
})
.finally( () => console.log("Fetch operation completed."))