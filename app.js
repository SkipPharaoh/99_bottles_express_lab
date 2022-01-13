// Importing modules //
const express = require('express')

// Variable //
const app = express()
const port = 4000

// Config //
app.set('view engine', 'ejs')
app.use('/views', express.static('views'))

// Routes //
app.get('/bottles/:number_of_bottles', (req,res)=>{
    console.log(req.params.number_of_bottles - 1)
    res.render('index.ejs',{
        number: req.params.number_of_bottles,
    })
})
app.get('/', (req,res)=>{
    res.redirect('http://localhost:4000/bottles/99')
})
app.get('/bottles/99', (req,res)=>{
    res.render(index.ejs)
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
