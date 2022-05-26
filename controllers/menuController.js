const fs = require('fs')
const path = require('path')
const getInfoDatabase = require('../utils/getInfoDatabase')

const pratos = getInfoDatabase('pratos')
const pathPratosJSON = path.join(__dirname, '..', 'database', 'pratos.json')
const menu = require('../database/pratos.json')
// const login = require('../views/login')

// const users = [
//     { name: 'Lucas', id: 1 }
// ]

const menuController = {
    getHomepage: (req, res) => {
        res.render('index', {
           menu
        });
    },
    getDetails: (req, res) => {
        const { id } = req.params;
        const pratoFound = pratos.find((prato) => {
            return prato.id === Number(id)
        })

        res.render('detalheMenu', {
            pratoFound
        })
    },
    getlogin: (req, res) => {
        res.render('login');
    }
}

module.exports = menuController