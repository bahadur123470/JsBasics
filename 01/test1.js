const accountId = 12334335
let accountName = 'John Doe'
var accountBalance = 1000.00
userCity = 'New York'

// accountId = 5555
accountName = 'Aaron'
accountBalance = 2000.00

/*
Prefer const over let and var
Use const for variables that are not reassigned
Use let for variables that are reassigned

Prefer not to use var
because of issues in block scoping and function scoping
Use var only if you need to support older browsers

*/

console.table([ accountId, accountName, accountBalance, userCity]);