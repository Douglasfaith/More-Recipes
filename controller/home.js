const { static, Router } = require("express");
const { get } = require("http");
const db = require("../database/db.json");


class Recipe {
    static getRecipe(req,res) {
        res.status(200).send(db)
    }


    // for(let i=0; i<myArray.length; i++)
    static createRecipe(req, res) {
        let update = db.recipes.push({
            id: db.recipes.length +1,
            name: req.body.name,
            ingredients: req.body.ingredient,
            direction: req.body.direction,
            reviews: req.body.reviews

        })
        // res.status(200).send('Created a recipe successfully')
        res.status(201).send({
            success: true,
            result: update
        })
        
    }

    // static updateRecipe(req,res) {
    // }
    
    
    

     static findRecipe(req,res){
         let allrecipes = db.recipes;
         let id = req.body.id
         let found;
         for(let i=0; i<allrecipes.length; i++){
             if(allrecipes[i].id === id) {
                found = allrecipes[i]
             }
         }

         if(found) {
             res.status(200).send({
                 success: true,
                 result: found
             })
         } else {
             res.status(404).send({
                 success: false,
                 message: "Recipe does not exist"
             })
         }
     }

     static updateRecipe(req,res){
        let allrecipes = db.recipes;
        let id = req.body.id
        let found;

      
        for(let i=0; i<allrecipes.length; i++){
            if(allrecipes[i].id === id) {
                let updated = {...allrecipes[i], ...req.body}
                allrecipes[i] = updated;
                // allrecipes[i].name = req.body.name;
                // allrecipes[i].ingredients = req.body.ingredients;
                // allrecipes[i].direction = req.body.direction;
                // allrecipes[i].reviews= req.body.reviews


                found = allrecipes[i];
            }

        }

        if(found) {
            res.status(200).send({
                success: true,
                result: found
            })
        } else {
            res.status(404).send({
                success: false,
                message: "Recipe does not exist"
            })
        }
    }


    static removeRecipe(req,res){
    let allrecipes = db.recipes;
    let id = req.body.id
    let found;
    for(let i=0; i<allrecipes.length; i++){
        if(allrecipes[i].id === id) {
           
            allrecipes.splice(i,1)

            found = true
        }
    }
if (found){

    res.status(201).send({
        success: true,
        result: "deleted successfully" 
    })
}
   else{
    res.status(404).send({
        success: false,
        message: "Recipe does not exist"
    })
   }
   
    }



}










module.exports = Recipe;
