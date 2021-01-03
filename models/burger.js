const orm = require ("../config/orm.js")

const burgers = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (newName, cb) => {
        orm.insertOne("burgers", "burger_name", newName, (res) => {
            cb(res);
        });
    }
}