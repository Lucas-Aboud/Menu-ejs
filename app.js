const express = require('express');
const path = require('path')
const app = express();
const routes = require('./routes')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(3000, () => console.log("Aplicação rodando em http://localhost:3000"));