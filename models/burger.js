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