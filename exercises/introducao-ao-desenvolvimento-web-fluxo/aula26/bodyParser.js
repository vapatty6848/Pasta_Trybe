/* Body Parser
Esse é um pacote usando normalmente para tratar o body de requisições do tipo POST . Quando há intenção de colocar parâmetros no corpo da requisição é importante que esse corpo (body) seja parseado, pois o express não lê um corpo em JSON por padrão.
Para isso é necessário instalar o pacote body-parser com o comando npm i body-parser .
Veja o exemplo abaixo para o body-parser em ação:
*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Aqui o body-parser entra convertendo o body para JSON

app.post('/', (req, res) => {
  const nome = req.body.name
  res.send(`Meu nome é ${nome} e manjo dos sambas`)
})

app.listen(3000, () => console.log('rodando na clássica 3000'));

// Para testar isso o ideal é ter algum gerenciador de requisições como o Postman e Insomnia. . Assim você pode testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP.
// Faça uma requisição do tipo POST para a url http://localhost:3000/ com o body:

// {
//   "name": "Zeca Pagodinho"
// }