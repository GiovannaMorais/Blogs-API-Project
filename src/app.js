const express = require('express');
const loginController = require('./controllers/login.controller');
const usersController = require('./controllers/user.controller');
const validateToken = require('./middlewares/validateToken');
const categoriesController = require('./controllers/categories.controller');
const postsController = require('./controllers/posts.controller');
const auth = require('./middlewares/autheticateToken');

const app = express();

app.use(express.json());

app.post('/user', usersController.createUser);
app.get('/user', validateToken, usersController.getUsers);
app.get('/user/:id', validateToken, usersController.getUsersById);
app.delete('/user/me', validateToken, usersController.deleteUser);

app.post('/login', loginController.signIn);

app.post('/categories', validateToken, categoriesController.createCategory);
app.get('/categories', validateToken, categoriesController.getCategories);

app.get('/post', validateToken, postsController.getPosts);
app.post('/post', validateToken, postsController.createPost);
app.get('/post/search', validateToken, postsController.searchItem);
app.get('/post/:id', validateToken, postsController.getPostsById);
app.put('/post/:id', validateToken, auth, postsController.updatePost);
app.delete('/post/:id', validateToken, auth, postsController.deletePost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
