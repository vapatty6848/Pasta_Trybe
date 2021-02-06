const express = require('express');
/* Chama a função express para instanciar a aplicação do framework
   e armazenar na variável app para ser utilizada no código */
const app = express();

/* Ouve por requisições, utilizando o método GET, no caminho '/' */
app.get('/', function (req, res) {
  /* Retorna a resposta */
  res.send('Hello World!');
});

/* Ouve a porta 3000 */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});