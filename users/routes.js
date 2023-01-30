const express = require('express')

const Router = express.Router();
const { createUser } = require('./controlador/controler')


Router.post('/createuser', createUser)


module.exports = Router;