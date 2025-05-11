let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())


let localDate = new Date(2005,2,7)
console.log(localDate.toDateString())

let dateTime = new Date(2012, 3,11, 16,30)
console.log(dateTime.toLocaleString());

let date1 = new Date("2023-10-07")
console.log(date1.toLocaleString())
console.log(date1.toDateString())

let date2 = new Date("03-07-2005")
console.log(date2.toLocaleString())
console.log(date2.toDateString())

let myTimeStamp = new Date()
console.log(myTimeStamp.getTime())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getTime())
console.log(newDate.getMonth())