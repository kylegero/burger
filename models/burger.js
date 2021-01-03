const orm = require ("../config/orm.js")

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (newBurg, cb) => {
        orm.insertOne("burgers", "burger_name", newBurg, (res) => {
            cb(res);
        });
    },

    updateOne: (eaten, updateId, cb) => {
        let newVal = {
            "devoured": eaten
        };
        orm.updateOne("burgers", newVal, "id", updateId, (res) => {
            cb(res);
        });
    }
};
module.exports = burger;