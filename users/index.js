const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Router = require('./routes')

const port = process.env.PORT_SERVICE_1 || 8001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)

app.get('/', (req, res) => {
  res.send("I'm the Users Microservice")
})

//Inicia el Servidor
app.listen(port, () => {
  console.log('Server Running at http://localhost:', port)
})