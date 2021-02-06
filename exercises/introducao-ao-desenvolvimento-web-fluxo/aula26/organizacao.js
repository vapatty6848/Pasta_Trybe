/* Organização
 meu arquivo principal vai ficar gigante!" 😱
C O Express tem uma solução bem interessante para organizar rotas: o Router .
O Router pode ser visto como uma versão menor do app , onde são declaradas apenas as rotas e middlewares. Ele é depois "plugado" no "app principal".
Como exemplo uma API que retorna dados sobre os Simpsons: */

// simpsons.js
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/homer', function (req, res) {
  res.send('Hello Homer!');
});

module.exports = router;

// index.js
const express = require('express');
const simpsons = require('./simpsons');

const app = express();

/* Todas as rotas com /simpsons/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/simpsons', simpsons);

app.listen(3000);
/* 
tiverem No exemplo acima, as rotas /simpsons e /simpsons/homer estão criadas e serão ouvidas pela aplicação.
Voltando à analogia da esteira, quando fazemos o código app.use('/simpsons', simpsons) está sendo criada uma máquina, ou, no caso, um Middleware . Esse Middleware é responsável por alternar os destinos de acordo com a rota presente na embalagem do pacote. Esse tipo de Middleware é chamado de Middleware de Rota. Mas é importante destacar que ele também pode ser usado pra um método específico, como, por exemplo: caso não tivéssemos feito o código acima e quiséssemos apenas o método GET para o endpoint /simpsons , bastaria fazer app.get('/simpsons', simpsons) . */
