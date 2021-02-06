/* Níveis de Middleware
Os exemplos dados acima são de middlewares em nível de aplicação , ou seja, eles serão usados por
 todos os requests recebidos pelo nosso app.
Podemos também definir os escopos desses middlewares. Um exemplo é um middleware que se aplica a 
apenas uma rota específica, que pode ser passado como um dos parâmetros na hora de definir uma rota: */

const app = require('express')();

const logRouteIdMiddleware = (req, res, next) => {
  console.log('ID:', req.params.id);
  next();
}

app.get('/simpsons/people/:id', logRouteIdMiddleware, (req, res) => {
  res.send('Hello, Homer!');
});
app.listen(3000);

// Os middlewares podem ser utilizados em conjunto com um Router também. 
// Nesse caso, eles se aplicam apenas às rotas que fazem parte desse roteador:

// simpsons.js
const express = require('express');
const router = express.Router();

/* Se aplica somente às rotas que fazem parte desse Router */
router.use(function (req, res, next) {
  console.log('Hora:', Date.now());
  next();
});

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/homer', function (req, res) {
  res.send('Hello Homer!');
});

module.exports = router;

// Agora, para importa o router e usá-lo é super simples:

// index.js 
const app = require('express')();
const router = require('./simpsons')
/* Aqui importamos o router e usamos o roteamento, definido no último arquivo,
// apenas nas requisições que começem com '.../simpsons' */

app.use('/simpsons', router);

app.listen(3000, () => console.log('ouvindo na porta 3000'));