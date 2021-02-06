const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('hello world');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
    res.send('hello world get');
  })
  .post(function (req, res) {
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// ---------------
//Existe também a possibilidade de se passar N callbacks para a mesma rota:
// 
// ...

app.get(
  '/ping',
  function (req, res, next) {
    console.log('fiz alguma coisa');
    /* Chama a próxima callback */
    next();
  },
  function (req, res) {
    /* A segunda (e última) callback envia a resposta para o cliente */
    res.send('pong!');
  }
);

// ...--------------- ......................
// Caminhos
/* Por vezes, numa API, precisamos ajustar a resposta de acordo com informações recebidas no caminho da request. Por exemplo, na Star Wars API , podemos buscar uma pessoa pelo seu ID com a URL https://swapi.dev/api/people/1/ . Nesse caso, 1 é um parâmetro, e a rota é GET /api/people/:id . Se fôssemos extrair o parâmetro ID na mão, teríamos uma grande dificuldade para fazê-lo e para tratar todos os casos possíveis. Ainda bem que temos o Express! 😌
O framework nos dá métodos específicos para lidar com esses casos:
 
*/
const express = require('express');
const app = express();

/* :id vira um atributo dentro do objeto params,
   que por sua vez está dentro do objeto req */
app.get('/api/people/:id', function (req, res) {
  res.send(req.params.id);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//Note que definimos um parâmetro id na rota, utilizando a sintaxe :id . Esse parâmetro pode, depois, ser acessado através da propriedade params , presente em req utilizando req.params.id . O express suporta a definição de mais de um parâmetro no caminho da rota, e cada um deles vira uma propriedade no objeto params .
// Inclusive podemos usar expressões regulares , o famoso RegEx: 

const express = require('express');
const app = express();

/* Qualquer rota que tem o padrão de terminar com "be".
   Exemplo: trybe, wannabe, letitbe */
app.get(/.*be$/, function (req, res) {
  res.send('/.*be$/');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//
/* Query String
Em outros casos, precisamos receber uma informação na URL que não faz parte do caminho, ao contrário do último tópico. Um caso de uso muito comum é quando temos um endpoint que permite realizar uma pesquisa.
 O mais comum é passarmos esses parâmetros num formato conhecido como Query String . Esse formato consiste em passar uma string contendo o nome de cada parâmetro, seguido pelo seu valor, separando vários parâmetros através do caractere & . A QueryString é separada do caminho utilizando o caractere ? .
Por exemplo: https://minha-api.com/endpoint/1?name=exemplo&number=10 .
No exemplo acima, estamos passando um parâmetro chamado name que contém o valor exemplo , e um parâmetro chamado number cujo valor é 10 .
No back-end, podemos acessar esses valores através da propriedade query da request, de forma similar ao que fazemos com os parâmetros no caminho: 

*/
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  const name = req.query.name;

  res.status(200)
    .json({ message: `Hello, ${name}` });
})
app.listen(3000, () => console.log('rodando na clássica 3000'));

// ⚠️ Atenção ⚠️ : O valor dos parâmetros passados através da query string sempre é... Bom... Uma string 😅. Isso quer dizer que, quando quiser receber um número através da query string, você precisará realizar a conversão de string para número utilizando a função parseInt .