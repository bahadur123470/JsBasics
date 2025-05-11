const userDetail = {}
userDetail.name = "Bahadur"
userDetail.age = 21
userDetail.email = "bahadur@gmail.com"

// console.log(userDetail)

const accountTitle = {
    title: "bahadur",
    accountNumber: 1234567890,
    email: "bahadur@gmail.com",
    fullname: {
        firstname : "Bahadur",
        lastname: "Ali"
    }
}
console.log(accountTitle)

const alpha1 = {1: "Aa", 2: "Bb", 3: "Cc"}
const alpha2 = {4: "Dd", 5: "Ee", 6: "Ff"}
const alpha4 = {7: "Gg", 8: "Hh", 9: "Ii"}

//  Older way of merging objects 
const alpha3 = Object.assign({}, alpha1, alpha2)
console.log(alpha3)
const alpha5 = Object.assign({}, alpha3, alpha4)
console.log(alpha5)

// Modern way of merging objects
const alphaSpread = {...alpha1, ...alpha3, ...alpha4}
console.log(alphaSpread)

//  //  //  //  //  //  //  //  //  //  //  //
console.log(userDetail)
console.log(Object.keys(userDetail))
console.log(Object.values(userDetail))
console.log(Object.entries(userDetail))
console.log(Object.fromEntries(Object.entries(userDetail)))
console.log(Object.assign({}, userDetail))
console.log(userDetail.hasOwnProperty("age"))