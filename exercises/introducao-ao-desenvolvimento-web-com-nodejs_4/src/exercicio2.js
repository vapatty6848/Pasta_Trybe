/* Crie um endpoint que receba requisições do tipo POST no caminho /hello , contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON { "message": "Hello, <nome do usuário>!" } . */

const express = require('express');
const app = express();

app.get('/ping', (res) => res.json({ "message": "Pong!" }));

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));