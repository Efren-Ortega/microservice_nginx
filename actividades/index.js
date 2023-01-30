const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT_SERVICE_2 || 8002

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send("I'm the Activity Microservice")
})

//Inicia el Servidor
app.listen(port, () => {
  console.log('Server Running at http://localhost:', port)
})