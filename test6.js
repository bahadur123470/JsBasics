let score = 109
console.log(score)

const deposit = 1000
console.log(deposit)

const balance = new Number(2500)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)

const amount = 1000.893456789
console.log(amount.toFixed(2))

const amount2 = 154.9758
console.log(amount2.toPrecision(3))

const value = 1000000
console.log(value.toLocaleString('en-US', { style: "currency", currency: "USD"}))
console.log(value.toLocaleString('en-PK', { style: 'currency', currency: 'PKR'}))