const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {console.log("111111111");
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {console.log("22222222222222");
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "w!nd0wl!cker",
        database: "burgers_db"
    });
    console.log("33333333");
};
connection.connect((err) => {
    if (err) {
        console.log(`ERROR during CONNECTION: ${err.stack}`);
        return;
    } 
    console.log(`connected to ${connection.threadId}`);
});

module.exports = connection;