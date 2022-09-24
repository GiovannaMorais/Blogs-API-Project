const express = require('express');
const loginController = require('./controllers/login.controller');
const usersController = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.post('/user', usersController.createUser);
app.post('/login', loginController.signIn);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
