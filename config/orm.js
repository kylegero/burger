const connection = require("./connection.js")

let orm = {
    selectAll: (table, cb) => {
        let query = `SELECT * FROM ??`;
        connection.query(query, table, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;