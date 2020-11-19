const express = require("express")
const Home = require('../controller/home');


const route = express.Router();

route.get('/name', Home.getHome)

module.exports = route;