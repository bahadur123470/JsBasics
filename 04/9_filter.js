const  numbers = [11,12,13,14,15,16,17,18,19,20,]
const teenNumber = numbers.filter( (num) => {
    return num > 12 && num < 19 
})
// console.log(teenNumber)

//  In foreach loop same example
const digits = [1,2,3,4,5,6,7,8,9,10]
const newDigits = []
digits.forEach( (num)=> {
    if ( num > 5){
        newDigits.push(num)
    }
})
// console.log(newDigits)

const oldBooks = [
    { title: "Treasure Island", genre: "Adventure", publishYear: 1883, edition: "First" },
    { title: "Twenty Thousand Leagues Under the Seas", genre: "Science Fiction", publishYear: 1870, edition: "Original" },
    { title: "Journey to the Center of the Earth", genre: "Science Fiction", publishYear: 1864, edition: "Early" },
    { title: "The Adventures of Sherlock Holmes", genre: "Mystery", publishYear: 1892, edition: "First" },
    { title: "Around the World in Eighty Days", genre: "Adventure", publishYear: 1873, edition: "Original" },
    { title: "The Mysterious Island", genre: "Adventure", publishYear: 1875, edition: "First" },
    { title: "The Hound of the Baskervilles", genre: "Mystery", publishYear: 1902, edition: "First" },
    { title: "The Time Machine", genre: "Science Fiction", publishYear: 1895, edition: "First" },
    { title: "The War of the Worlds", genre: "Science Fiction", publishYear: 1898, edition: "Original" },
    { title: "Kidnapped", genre: "Adventure", publishYear: 1886, edition: "Early" },
    { title: "King Solomon's Mines", genre: "Adventure", publishYear: 1885, edition: "First" },
    { title: "The Sign of the Four", genre: "Mystery", publishYear: 1890, edition: "First" }
];
const bookList = oldBooks.filter( (book) => {
    if ( book.genre === "Mystery"){
        return book
    }
})
// console.log(bookGenre)

const flights = [
    { flightNumber: "PK301", origin: "Lahore", destination: "Karachi", departure: "08:00", arrival: "10:00", airline: "PIA" },
    { flightNumber: "EK611", origin: "Islamabad", destination: "Dubai", departure: "12:30", arrival: "14:45", airline: "Emirates" },
    { flightNumber: "QR633", origin: "Karachi", destination: "Doha", departure: "03:00", arrival: "05:15", airline: "Qatar Airways" },
    { flightNumber: "SV735", origin: "Multan", destination: "Jeddah", departure: "22:00", arrival: "02:30", airline: "Saudia" },
    { flightNumber: "TK709", origin: "Islamabad", destination: "Istanbul", departure: "05:15", arrival: "09:30", airline: "Turkish Airlines" },
    { flightNumber: "BA260", origin: "Lahore", destination: "London", departure: "01:00", arrival: "06:50", airline: "British Airways" },
    { flightNumber: "PK205", origin: "Karachi", destination: "Dubai", departure: "11:00", arrival: "13:10", airline: "PIA" },
    { flightNumber: "EY242", origin: "Islamabad", destination: "Abu Dhabi", departure: "17:20", arrival: "19:30", airline: "Etihad" },
    { flightNumber: "AI186", origin: "Lahore", destination: "Delhi", departure: "15:00", arrival: "16:15", airline: "Air India" },
    { flightNumber: "WY324", origin: "Karachi", destination: "Muscat", departure: "06:00", arrival: "07:40", airline: "Oman Air" }
];
const flightList = flights.filter( (fly) => {
    return fly.origin === "Lahore" && fly.destination === "London"
    // if (fly.origin === "Islamabad"){
    //     return fly
    // }
})
console.log(flightList)

