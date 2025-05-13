const fruits = {
    name: "apple",
    price: 10.99,

    usage: function(){
        console.log(`An ${this.name} a day keep doctors away`)
        // console.log(this)
    }
}
// fruits.usage()
// fruits.name = "orange"
// fruits.usage()

//  Not use (  this  ) in simple functions  best to use in objects
function language(){
    console.log(this)
}
// language()

const language2 = function(){
    console.log(this)
}
// language2()

const language3 = () =>{
    name: "english"
    console.log(this)
}
language3()

const numberAddition = (num1, num2) =>{
    return num1 * num2
}
console.log(numberAddition(6, 7))

const numberAddition2 = (num1, num2) => ( num1 + num2)
console.log(numberAddition2(5,3))

const user = () =>  ({name: "Bahadur"})
console.log(user())