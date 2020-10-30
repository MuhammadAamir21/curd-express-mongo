// ---------------------------------------------My code enjoying the weather----------------------------------------------------
const connectionString = 'mongodb://127.0.0.1:27017'

MongoClient.connect(connectionString, { useUnifiedTopology: true
})
.then(client => {

console.log('Connected to Database')
const db = client.db('HLF')
const signupCollection = db.collection('Login')

app.get('/signup', async function (req, res) {
  
  db.collection('signup').find().toArray()
  .then(results => {
    return res.send(results)
   
  })
  .catch(error => res.status(401).send(error))
  
});

app.post('/signup', async function (req, res) {
  

  signupCollection.insertOne(req.body)
  .then(result => {
    res.status(400).send()
   
  })
  .catch(error => res.status(401).send(error))
  
});

})

// --------------------------------------------------------------------------------------------------------------
