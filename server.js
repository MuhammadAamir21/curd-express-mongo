const express = require('express');
const app = express();

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
app.get('/', (req, res) => {
    res.send('Hello World')
})