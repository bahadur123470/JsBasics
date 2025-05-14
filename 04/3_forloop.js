//  loop also called as iterations

// for (initialization; condition; increment) {
//     // code to run
//  }
 

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element) 
}
for ( let a = 0;  a <=50 ; a++){
    // console.log(a)
}

for (let i = 0; i <=10 ; i++) {
    const element = i;
    if (element == 7){
        // console.log("7 is my lucky number")
    }
    // console.log(element)
}

for ( let a = 0; a <= 5; a++){
    // console.log(`Outer Loop : ${a}`)
    for (let b = 0; b <=5; b++){
        // console.log(`Inner Loop : ${b} Outer Loop: ${a}`)
    }
}

//  Tables 

for ( let x = 1; x <=10; x++){
    console.log(`Table of ${x}`)
    for (let y = 1; y <= 10; y++){
        console.log(x + '*' + y + " = " + x*y)
    }
}

const avengerArr = ["Ironman", "hulk", "flash", "batman", "widow","captain America", "superman"]
// console.log(avengerArr.length)
for ( let a = 0; a < avengerArr.length; a++){
    const element = avengerArr[a]
    // console.log(element)
}

//  conditional loop
for ( r = 0; r <= 20; r++){
    if ( r == 7){
        console.log("7 is your lucky number")
        break
    }
    // console.log(`value of r is ${r}`)
}

for ( x = 0; x <= 20; x++){
    if (x == 10){
        // console.log("10 is best number")
        continue
    }
    // console.log(`count of x is ${x}`)
}
