/* Vamos dar um passo atrás e voltar para a analogia da esteira. O Middleware é a solução pro problema da falta de informações ou erro no pacote levantado anteriormente. Claro, ele pode também servir em muitos cenários, como autenticação. Imagine que todos os pacotes que entrarem pela esteira e que tenham como destino as rotas /products e /purchases precisem de uma assinatura no pacote para poderem chegar ao destino. Faz sentido que seja criada uma única máquina que, após a analise do destino dos pacotes, atravesse a esteira e retire os pacotes que não possuem autorização para estar lá.
Os Middlewares , apesar de ser mais comum encontrá-los trabalhando simultaneamente em várias rotas, também podem estar presentes em uma rota específica apenas. Por exemplo, imagine que na rota /cars seja necessário que dentro do pacote estejam presentes os dados name , year e brand . É possível e recomendável que uma máquina, ou um Middleware , seja criado pra validar se todos esses dados estão dentro do pacote.
Muitas vezes precisamos realizar a mesma ação para várias rotas. Por exemplo, para rotas que exigem autenticação, sempre precisaremos validar se o Header de autenticação foi mesmo enviado e, se sim, verificar se ele está correto. Outro exemplo é que podemos querer escrever no console o método e caminho de todas as requisições que nossa API receber, para manter um log detalhado. Para esses casos, o express adota o uso de middlewares .
O conceito Middleware, na verdade, não é algo criado pelo Express e também não é de uso exclusivo do framework. Middleware é, na verdade, um padrão de software que acabou se popularizando por causa do Express.
Esse pattern funciona muito bem com JavaScript, de maneira geral, por conta da capacidade que a linguagem tem de passar funções como parâmetros para outra função.
Ele consiste em, basicamente, uma ou mais funções que vão rodar antes ou depois da callback da sua rota ( essa callback pode ser chamada de controller ) e depois do servidor receber a requisição. Ou seja, entre a requisição HTTP e a resposta final .
Um uso bem comum de middlewares é em autenticação, em que nossos endpoints precisam de um token para performar certa ação, por exemplo, e nós queremos que essa autenticação ocorra antes de chegar até nosso controller, de forma sequencial.
A assinatura de um middleware é a mesma do callback de uma rota: function (req, res, next) {} . O middleware pode fazer alterações tanto no request quanto na response.
Como os middlewares ficam "no meio" de uma operação, provavelmente vamos querer que em algum momento nosso controller ou o próximo middleware seja chamado. É aí que essa função next entra. */

const express = require('express');
const app = express();

/* app.use é utilizado para registrar um middleware */
/* Nesse caso, toda vez que um request for recebido, vamos logar o método HTTP e o caminho */
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path}`)
  /* Termina a operação no middleware e chama o próximo middleware ou rota */
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/* Primeiro a ser chamado */
app.use(middleware1);
/* Segundo a ser chamado */
app.use(middleware2);

const express = require('express');
const app = express();

const requestTimeMiddleware = function (req, res, next) {
  /* Modificamos o objeto req, adicionando o campo requestTime */
  req.requestTime = Date.now();
  /* Chamamos a próxima função */
  next();
};

/* Registramos nosso middleware */
app.use(requestTimeMiddleware);

app.get('/', function (req, res) {
  const responseText = `Request feito às ${req.requestTime}`;
  res.send(responseText);
});

app.listen(3000);