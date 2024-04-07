require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.send('codedeveloper.js')
})

app.get('/login', (req, res) => {
    res.send('<h1>please enter your username and login</h1>')
})


app.get('/node_backend', (req, res) => {
    res.send("<h2> this is how you learn node backend process</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})