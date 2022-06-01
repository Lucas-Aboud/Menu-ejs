const express = require('express');
const menuController = require('../controllers/menuController');
const UsersController = require('../controllers/UsersController')

const menuRouter = express.Router()

menuRouter.get('/', menuController.getHomepage);
menuRouter.get('/detalheMenu/:id', menuController.getDetails);
menuRouter.get('/login', menuController.getlogin)
menuRouter.post('/login', UsersController.login)

module.exports = menuRouter;