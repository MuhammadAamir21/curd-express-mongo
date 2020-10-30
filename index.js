const express = require('express');
const app = express();
app.use(express.json());

const MongoClient = require('mongodb').MongoClient

console.log('May Node be with you')



app.listen(3000, function() {
    console.log('http://localhost:3000/')
})

// ---------------------------------------------My code enjoying the weather----------------------------------------------------


const connectionString = 'mongodb://127.0.0.1:27017'

MongoClient.connect(connectionString, { useUnifiedTopology: true
})
.then(client => {

console.log('Connected to Database')
const db = client.db('HLF')
const signupCollection = db.collection('signup')

app.get('/signups', async function (req, res) {
  
  signupCollection.find().toArray()
  .then(results => {
    return res.send(results)
   
  })
  .catch(error => res.send(error))

  //.catch(error => res.status(400).send(error))
  
});


app.post('/signup',  async function (req, res) {

  console.log(req.body)
  
  signupCollection.insertOne(req.body)
  .then(result => {
    
    res.status(200).send(req.body)
   
  })
  .catch(error => res.send(error))
  
});

})

// --------------------------------------------------------------------------------------------------------------
