function webDevelopment(){
    const popular = "JavaScript"

    function frontend(){
        const react = "React as frontend"
        console.log(react)
        console.log(`React is a library of ${popular}`)
    }
    frontend()

    function backend(){
        const node = "Node as backend"
        console.log(node)
        console.log(`Node is a runtime environment of ${popular}`)

        function Api(){
            const express = "Express as API"
            console.log(express)
            console.log(`Express run on the ${node}`)

            function database(){
                const mongo = "Mongo as database"
                console.log(mongo)
                console.log(`Mongo is a database handle by ${express}`)
            }
            database()
        }
        Api()
    }
    backend()
}
webDevelopment()


if (true){
    const mern = "Javascript"
    console.log(mern)
    if (mern === "Javascript"){
        const frontend = "React"
        console.log(frontend)
        console.log(mern + frontend)
        if (frontend === "React"){
            const backend = "Node"
            console.log(backend)
            console.log(mern + backend)
        }
    }
}


// In this case, we can call the function before it's declared because of hoisting
console.log(addValue(7))
function addValue(num){
    return num + 5
}

// In function expressions, you must define the function before calling it
const add = function(num){
    return num + 10
}
console.log(add(7))