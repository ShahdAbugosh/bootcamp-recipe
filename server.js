const express = require('express')
var urllib = require('urllib');
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



class Recipes {
    constructor(obj) {
        this.title = obj.title
        this.video = obj.herf
        this.pic = obj.thumbnail
        this.ingrdents = obj.ingrdents
        
    }


}


app.get('/sanity', function (req, response) {
   response.send("OK")
})


let selectinge =" "


app.get('/recipes/:ingredient', function (req, response) {
    let recipesArray = []

    urllib.request('https://recipes-goodness.herokuapp.com/recipes', function (err, data, res) {
        selectingre = req.params.ingredient
        let newData = JSON.parse(data.toString()).results
        let ingre    // put all the ingredients in recipe
        for (let res of newData) {

            ingre = res.ingrdents
            for( ing of ingre){
                if(ing == selectingre)
                     recipesArray.push(new Player(p))
                     
            }

         response.send(recioesArray)
        }
    })
})


const port = 8080

app.listen(port, function () {
    console.log('server is listening to port '+ port);
})


module.exports