//  Immediately Invoked Function Expression (IIFE)

(function connection(){
    console.log(`DB connection established`);
})();

( (dbName) => {
    console.log(`Database connection established successfully to ${dbName}`);
})("bytesConn");