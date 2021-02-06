// Crie uma aplicação express que receba uma requisição do tipo GET no caminho /ping e 
// retorne o JSON { "message": "Pong!" } .

const express = require('express');
const app = express();

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));