const connection = require("./connection.js")

let orm = {
    selectAll: (table, cb) => {
        let query = `SELECT * FROM ??`;
        connection.query(query, table, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: (table, col, val, cb) => {
        let query = `INSERT INTO ?? (??) VALUES (?)`;
        connection.query(query, [table, col, val], (err, res) => {
            if (err) throw err;
            cb(res)
        });
    },

    updateOne: (table, newVals, col, criteria, cb) => {
        let query = `UPDATE ?? SET ? WHERE ??=?`
        connection.query(query, [table, newVals, col, criteria], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;