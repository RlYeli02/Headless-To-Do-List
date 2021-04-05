const express = require ('express')
const CONNECTION_URL=require('./config')
var MongoClient = require('mongodb').MongoClient;
const app = express()


const PORT = process.env.PORT || 3000;



app.get('/', (req, res)=>{
    console.log(req.url)
    res.send("hello")
})

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}, (err, db)=>{
    if (err){
        console.log(err)
    }
    console.log("conencted")
})
    
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})