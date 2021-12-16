const express = require('express')
const path = require('path')

const app = express()

app.get('/', function(req, res) {    
    
    res.sendFile(path.join(__dirname, '../index.html'))

})

const port = process.env.PORT || 4006

// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, './.js'))
//   })


// app.post('/js', (req,res))





app.listen(port, () => {
    console.log(`Avengers! Assemble... on port ${port}`)})