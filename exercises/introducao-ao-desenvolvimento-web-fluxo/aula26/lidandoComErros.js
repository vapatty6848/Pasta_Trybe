/* Lidando com erros
O Express tem um padrão para lidar com erros chamado de error first (erro primeiro) , em que o erro é passado como primeiro parâmetro para as funções, que devem ser registradas como midlewares de erro .
A diferença de um middleware de erro para um middleware comum é que a assinatura dele recebe quatro parâmetros ao invés de três, ficando assim: function (err, req, res, next) {} . */
app.use(middleware1);
app.get('/' /* ... */);
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

/* É importante notar que:
Middlewares de erro sempre devem vir depois de rotas e outros middlewares ;
Middlewares de erro sempre devem receber quatro parâmetros .
O Express utiliza a quantidade de parâmetros que uma função recebe para determinar se ela é um middleware de erro ou um middleware comum. Ou seja, mesmo que você não vá utilizar os parâmetros req , res ou next , seu middleware de erro precisa recebê-los . Você pode adicionar um underline no começo do nome dos parâmetros que não vai usar. Isso é uma boa prática e sinaliza para quem está lendo o código que aquele parâmetro não é utilizado. Por exemplo: function (err, _req, res, _next) {} .
Também é possível encadear middlewares de erro, no mesmo esquema dos outros middlewares, simplesmente colocando-os na sequência em que devem ser executados. */

app.use(function logErrors(err, req, res, next) {
  console.error(err.stack);
  // passa o erro para o próximo middleware
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(500);
  res.send({ error: err });
});