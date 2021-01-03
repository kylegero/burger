const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        let picked = [];
        let eaten =[];
        data.forEach((burger) => {
            if (burger.devoured) {
                eaten.push(burger);
            } else {
                picked.push(burger);
            }
        });
        let burgerObj = {
            burgers_picked: picked,
            burgers_eaten: eaten
        };
        res.render("index", burgerObj);
    })
});

module.exports = router;