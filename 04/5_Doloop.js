let chaseTarget = 0
do {
    // console.log(`match start ${chaseTarget}`);
    chaseTarget++
} while ( chaseTarget <= 49);

let userLoggedIn = false
let attempt = 0
do {
    console.log(`User Attempting to Login`);
    attempt++

    if (attempt === 3){
        userLoggedIn = true;
        console.log(`User has logged in successful after ${attempt} attempts`);
    }
} while (!userLoggedIn);


let diceRoll = 3
let guess;
let roll = 0 
do {
    guess = Math.floor(Math.random() * 10)
    console.log(`You rolled a ${guess}`);
    if(guess == diceRoll){
        console.log(`You rolled a ${diceRoll} and guessed it!`);
    }
    else {
        console.log("Wrong guess try again")
    }
} while (guess !== diceRoll);


let toss;
do {
    toss = Math.random() < 0.5 ? "Tail" : "Head";
    console.log(`You got ${toss}`)
} while (toss !== "Head");
console.log(`----Finally you got a ${toss}-----`);  


let carCharge = 0;
do {
    console.log(`Car's charging level is  ${carCharge}%`);
    if ( carCharge < 100){
        carCharge += 20;
        console.log(`Car is on charge...`);
    }
} while ( carCharge  < 100);
console.log(`Car has fully charged at ${carCharge}%`);