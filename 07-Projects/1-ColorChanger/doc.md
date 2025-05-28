# Projects related to DOM

## My github repository for DOM projects
[here is link (click here)](https://github.com/bahadur123470/JsBasics)

### Javascript code 
```Javascript
const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach( function (button) {
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
            body.style.color = 'black' // Change text color to black for better contrast
        }
        else if (e.target.id === 'black') {
            body.style.backgroundColor = e.target.id
            body.style.color = 'white' // Change text color to white for better contrast
        }
        else if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id
        }
    })
})

```