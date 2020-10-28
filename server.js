const express = require('express');
const app = express();

// server.js
console.log('May Node be with you')

app.listen(3000, function() {
    console.log('listening on 3000')
})

//app.get(endpoint, callback)

// We normally abbreviate `request` to `req` and `response` to `res`.
app.get('/', function (req, res) {
    res.send('Hello World')
})