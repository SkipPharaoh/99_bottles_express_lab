// APP IMPORTS
const express = require('express')
const app = express()
// GLOBAL VALUES

let lastEntry = 99
// MIDDLEWARE / CONFIGURATION

app.set('view engine', 'ejs');

// ROUTING
app.get('/', (req,res)=>res.redirect('/bottles/99'))
app.get('/bottles/:number_of_bottles',(req, res)=>{
    // uses a ternary to convert the string into a number and checks if it is a greater than one, if not will set it back to 99
    const bottles = parseInt(req.params.number_of_bottles) >= 0 ? parseInt(req.params.number_of_bottles) : 99
    // sets the next variable to either the current bottle count or 99 
    const next = bottles-1 >= 0 ? bottles-1 : 99;
    // sets the url number for the next round
    const validNum = !isNaN(req.params.number_of_bottles)
    // uses isNaN to check if id is a number -- filters for strings entered manually 
    if(validNum){
        res.render('index', {bottles, next})
    }else {
        // If not valid string, redirect to most recent valid string (default: 99)
        res.redirect(`/bottles/${lastEntry}`)
    }  
    lastEntry = bottles
})

// INITIALIZE SERVER
app.listen(9000,()=>console.log('listening on port 9000'))
