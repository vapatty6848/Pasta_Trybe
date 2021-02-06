/* Crie um endpoint que receba requisições do tipo PUT no caminho /users/:name/:age e retorne o JSON { "message": "Seu nome é <name> e você tem <age> anos de idade" } . */
const express = require('express');
const app = express();

app.get('/ping', (response) => response.json({ "message": "Pong!" }));

app.use(bodyParser.json());

app.post('/hello', (request, response) => {
  const { name, age } = request.body;
  if(parseInt(age) < 17) return response.status(401).json({ "message": `Unauthorized` })
  res.status(200).json({ "message": `Hello, ${name}!` })
})

app.use(function (err, request, response, next) {
  response.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));