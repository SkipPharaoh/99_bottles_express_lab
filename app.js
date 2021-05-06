// APP IMPORTS
const express = require('express')
const app = express()

// GLOBAL VALUES
let lastEntry = 99

// MIDDLEWARE / CONFIGURATION
app.set('view engine', 'ejs');

// ROUTING
app.get('/', (req,res) => res.redirect('/bottles/99')) // same as below
/* 
 ************** shorthand syntax to redirect *******************
    The syntax above is the same as the following code:
    app.get('/', (req, res) => {
        res.redirect('/bottles/99'); // goes to /bottles/99
    })
****************************************************************
*/ 

app.get('/bottles/:number_of_bottles',(req, res) => { // :number_of_bottles => req.params.number_of_bottles
    // What data type is req.params? (object)
    console.log('Req Params', req.params); // What datatype is this? (object)
    let num = parseInt(req.params.number_of_bottles); // what datatype is this? (number)
    const bottles = num >= 0 ? num : 99 // ternary operator

    /* 
    ************************ What is happening with this variable => bottles **********************************
    uses a ternary to convert the string into a number and checks if it is a greater than or equal zero, if not 
    will set it back to 99
    // bottles - checks the condition, then returns either the first statement
    if (num >= 0) {
        return parseInt(req.params.number_of_bottles) // condition is true
    } else {
        return 99; // condition is not true
    }
    *********************************************************************************************************
    */

    // sets the next variable to either the current bottle count or 99 
    const next = bottles-1 >= 0 ? bottles-1 : 99; // What datatype is this? (number)
    // sets the url number for the next round
    const validNum = !isNaN(req.params.number_of_bottles) // what datatype is this? (boolean)
    /*
    ************************** What is happening with !isNaN ***********************************************
    isNaN is a built-in function in JavaScript that will return true or false if something is not a number.
    In the case above, we are checking to see if req.params.number_of_bottles is a number or not,
    with the !, when are switching to the opposite boolean. In our case we want our logic to ideally be true
    with validNum so that we can do the next ternary operator to either render the index.ejs with the object
    or redirect back to /bottles/99
    *********************************************************************************************************
    */
    console.log('validNum', validNum);

    
    validNum ? res.render('index', { bottles, next }) : res.redirect(`/bottles/${lastEntry}`)
    /*
    ********************** What is happening with ternary operator above ****************************************
    If validNum is true, then render the index.ejs page, and send to that page an object with two key/value pairs
    The object { bottles, next } is shorthand for { bottles: bottles, next: next }... If you have a key and value 
    with the same name, then you can use the shorthand syntax.
    
    If validNum is false, then it will redirect to /bottles/${lastEntry} with lastEntry being 99 or whatever is
    set at the time for the global variable
    *************************************************************************************************************
    */
    return lastEntry = bottles 
})

app.get('/*', (req, res) => {
    res.send('404');
})

// INITIALIZE SERVER
app.listen(9000, () => console.log('listening on port 9000'))
