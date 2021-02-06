/* Pacote express-rescue
O pacote express-rescue está disponível no npm e nos ajuda com a tarefa de garantir que os erros sempre sejam tratados. Para utilizá-lo, primeiro faça a instalação usando o comando npm i express-rescue
Para aprender a usá-lo, vamos pegar um caso de uso fazendo uma rota que recebe uma query param com o nome de um arquivo e usa o método readFile do pacote fs para ler um arquivo e depois retornar o conteúdo do arquivo como resposta da requisição. */


const fs = require('fs').promises; // este é um módulo do pacote fs que nos permite usa funções que retornam promises, assim podemos usar ele com async/await como visto abaixo.

app.get('/:fileName', async (req, res) => {
  const file = await fs.readFile(`./${req.params.fileName}`);
  res.send(file.toString('utf-8'));
});

// Para adicionarmos os express-rescue , basta passarmos nossa callback para ele, e passar seu retorno para o express envelopando o middleware da rota com o método rescue, da seguinte forma:

const rescue = require('express-rescue');
// const fs = require('fs').promises;

app.get('/:fileName', rescue(async (req, res) => {
//   const file = await fs.readFile(`./${req.params.fileName}`);
     res.send(file.toString('utf-8'))
}));

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}`})
})
// O que ele faz é simplesmente executar a função de callback dentro de um bloco de try ... catch , fazendo com que qualquer erro não tratado dentro do callback seja passado para a função next . Neste caso, se o arquivo não poder ser lido por qualquer razão que seja ele vai cair no middleware de erro que retorna uma resposta com status 500 e a mensagem de erro da excessão que foi gerada.
/* Para ver em execução, veja o código abaixo com o código completo */
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs').promises;

const app = express();

app.get('/:fileName', rescue(async (req, res) => {
  const file = await fs.readFile(`./${req.params.fileName}`);
  res.send(file.toString('utf-8'));
}));


app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}`})
})

app.listen(3000);

