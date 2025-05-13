const HotDrinkOptions = "irish tea"
switch (HotDrinkOptions) {
    case "coffee" : 
        console.log("You have chosen coffee");
        break;
    case "tea":
        console.log("You have chosen tea");
        break;
    case "Cappuccino ":
        console.log("You have chosen Cappuccino");
        break;
    case "Mocha":
        console.log("You have chosen Mocha");
        break;
    case "Latte":
        console.log("You have chosen Latte");
        break;
    case "Espresso":
        console.log("You have chosen Espresso")    
    default:
        console.log("This item is not available")
        break;
}


const Grade = "A+"
switch (Grade){
    case "A+":
    console.log("Excellent");
    break;
    case "A":
    console.log("Great");
    break;
    case "B+":
    console.log("Good");
    break;
    case "B":
    console.log("Satisfactory");
    break;
    case "c+":
    console.log("Average")
    break;
    default:
    console.log("Failed to get grade")
    break;
}


const age = 4
switch (true){
    case (age > 0 && age <= 6):
    console.log("Enter with your parents, You are a child");
    break;
    case (age > 6 && age <= 12):
    console.log("Enter with guarantee, You are a student");
    break;
    case (age > 12 && age < 18):
    console.log("Enter with protocols, You are a teenager");
    break;
    case (age >= 18 && age <= 40):
    console.log("Enter at your own risk, You are an adult");
    break;
    case (age > 40 && age <= 60):
    console.log("Enter with caution, You are a senior");
    break;
    case (age > 60):
    console.log("Enter with a caretaker, you are senior citizen")
    break;
    default:
    console.log("Prove your age first to enter")
    break;
}

// false values are under
// false, 0,  -0, 0n(BigInt), "" (empty string), null, undefined, Nan )

//  true values are under 
//  "0", '0', " ", ' ' , true, 1, [ empty array ], { empty object },  function(){},

//  Nullish coalescing Operator (??): null undefined
//  Terniary Operator