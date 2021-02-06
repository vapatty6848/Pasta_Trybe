/* /Agora você vai criar uma API de listagem dos personagens da série Simpsons. Como fonte de dados, você vai utilizar um arquivo JSON./  */
const express = require('express');
const app = express();

app.get('/ping', (res) => res.json({ "message": "Pong!" }));

app.use(bodyParser.json());

app.post('/hello', (request, response) => {
  const { name, age } = request.body;
  if(parseInt(age) < 17) return response.status(401).json({ "message": `Unauthorized` })
  request.status(200).json({ "message": `Hello, ${name}!` })
})

app.put('/hello', (request, response) => {
  const { name, age } = req.body;

  response.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.use(function (err, request, response, next) {
  response.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));