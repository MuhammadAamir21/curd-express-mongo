const express = require('express');
const bodyParser= require('body-parser')
const app = express();


const MongoClient = require('mongodb').MongoClient

//const url = 'mongodb://127.0.0.1:27017'


//const dbName = 'star-wars-quotes'
//let db

//MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//  if (err) return console.log(err)

  // Storing a reference to the database so you can use it later
//  db = client.db(dbName)
//  console.log(`Connected MongoDB: ${url}`)
//  console.log(`Database: ${dbName}`)
//})

const connectionString = 'mongodb://127.0.0.1:27017'

MongoClient.connect(connectionString, { useUnifiedTopology: true
})
.then(client => {

console.log('Connected to Database')
const db = client.db('star-wars-quotes')
const quotesCollection = db.collection('quotes')

app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
    .then(result => {
    res.redirect('/')
    //console.log(result)
    })
    .catch(error => console.error(error))
})

app.get('/get', (req, res) => {
    db.collection('quotes').find().toArray()
    .then(results => {
        return res.send(results)
    })
    .catch(error => console.error(error))

})

//app.use(/* ... */)
//app.get(/* ... */)
//app.post(/* ... */)
//app.listen(/* ... */)

})
.catch(console.error)


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

//app.post('/quotes', (req, res) => {
//    console.log('Hellooooooooooooooooo!')
//    console.log(req.body)
//})