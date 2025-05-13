const target = 350
if (target){
    console.log(`You have won match by completing ${target} runs`)
}
else {
    console.log(`You have lost the match`)
}


const maxCharge = "460ev"
if (maxCharge < "120ev"){
    const charging = "low"
    console.log(`Your car is ${charging} its need to charge`)
}
else {
    console.log(`Your car is charged and its max charge capacity is${maxCharge}`)
}


const isRaining = true
const isCloudy = true
if ( isRaining || isCloudy){
    console.log(`Bring your umbrella is raining`)
}
else {
    console.log(`No need to bring umbrella its sunny outside`)
}


const time = 8
if (time > 3 ){
    const tooEarly = "too early today"
    console.log(`class time is ${time} and you arrived ${tooEarly}`)
}
else {
    console.log(`Your are late for class, class time is ${time}`)
}


const weight = 74
if (weight < 54) console.log(`Your weight is above ${weight} and you are overweight`);
else console.log(`your weight is dropping it was ${weight}`)


const balance = 50000
if (balance >= 100000){
    console.log(`You are eligible for the loan`)
}
else if (balance >= 90000){
    console.log(` You can file an application for loan but that is 50/50`)
}
else if (balance < 90000 && balance >= 50000){
    console.log(`You can borrow some money from your friends or relatives`)
}
else {
    console.log(`You are not eligible for the loan`)
}


const userLoggedIn = true 
const paymentMethodVerified = true
const appleIdLogin = true
const emailLogin = false
if ( userLoggedIn && paymentMethodVerified){
    console.log(`You are logged in and your payment method is verified, you can shop now`)
}
if ( appleIdLogin || emailLogin){
    console.log(`You have loggedIn successfully`)
}