const express = require('express');
const LoginRouter = require('./routes/login.routes');
const UserRouter = require('./routes/user.routes');
const CategoryRouter = require('./routes/categoriesRouters');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', LoginRouter);
app.use('/user', UserRouter);
app.use('/categories', CategoryRouter);

// ...
app.use((err, req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({ message });
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
