const express = require("express")
const Recipe = require('../controller/home');


const route = express.Router();

route.delete('/recipe', Recipe.removeRecipe);
route.post('/recipe', Recipe.createRecipe);

route.get('/recipe', Recipe.getRecipe);

route.put('/recipe', Recipe.updateRecipe);

route.get('/recipe/id', Recipe.findRecipe);



module.exports = route;