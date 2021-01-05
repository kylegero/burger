const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "w!nd0wl!cker",
        database: "burgers_db"
    });
    
};
connection.connect((err) => {
    if (err) {
        console.log(`ERROR during CONNECTION: ${err.stack}`);
        return;
    } 
    console.log(`connected to ${connection.threadId}`);
});

module.exports = connection;