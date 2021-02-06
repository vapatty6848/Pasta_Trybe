const express = require('express');
const adminRouter = require('./admin');

const app = express();

// GET
// POST

function logRequest(req, res, next) {
  console.log("passou pello middleware logRequest");

  console.log(req.query.token);

  // if (req.query.token !== '123') return res.send("Você não tem acesso");

  next(); 
}

app.use(logRequest);

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.get('/users', function(req, res) {
  res.send('users');
});



app.use('/admin', adminRouter);

app.listen(3000);