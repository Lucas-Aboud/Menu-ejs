const express = require('express');
const menuRouter = express.Router()
const menuController = require('../controllers/menuController');

menuRouter.get('/', menuController.getHomepage);
menuRouter.get('/detalheMenu/:id', menuController.getDetails);
menuRouter.get('/login', menuController.getlogin)


module.exports = menuRouter;