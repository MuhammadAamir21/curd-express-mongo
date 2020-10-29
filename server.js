const express = require('express');
const bodyParser= require('body-parser')
const app = express();

//The urlencoded method within body-parser tells body-parser to extract
//data from the <form> element and add them to the body property
//in the request object.

//Express doesn’t handle reading data from the <form>
//element on it’s own. We have to add another package called body-parser
//to gain this functionality.
app.use(bodyParser.urlencoded({ extended: true }))

// server.js
console.log('May Node be with you')

app.listen(3000, function() {
    console.log('listening on 3000')
})

//app.get(endpoint, callback)

// We normally abbreviate `request` to `req` and `response` to `res`.
//app.get('/', function (req, res) {
//    res.send('Hello World')
//})

//replacing function() with an ES6 arrow function. The below code is the same as the above code
//app.get('/', (req, res) => {
//    res.send('Hello World')
//})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is directory current directory you're in.
    //Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-expressmongo'
    //for this app.
})

app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
    console.log(req.body)
})