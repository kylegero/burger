const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        let cooked = [];
        let eaten =[];
        data.forEach((burger) => {
            if (burger.devoured) {
                eaten.push(burger);
            } else {
                cooked.push(burger);
            }
        });
        let burgerObj = {
            burgers_cooked: cooked,
            burgers_eaten: eaten
        };
        res.render("index", burgerObj);
    })
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(req.body_name, (data) => {
        res.json({id: data.insertId});
    });
})

router.put("/api/burgers/:id", (req, res) => {
    burger.updateOne(true, req.params.id, (data) => {
        if (data.changedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
    });
})
module.exports = router;