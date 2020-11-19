const { static } = require("express");
const { get } = require("http");
const db = require("../database/db.json")

class Home {
    static getHome(req,res) {
        res.status(200).send(db)
    }
}

module.exports = Home;

