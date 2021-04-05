const express = require ('express')
const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    console.log(req.url)
    res.send("hello")
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})