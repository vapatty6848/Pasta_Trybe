const express = require('express');
const app = express();
const port = 3000;

const auth = require('./auth');

// adicionar cors

const data = require('./data');
app.use(express.json());



app.use(auth);

app.use((req, res, next) => {
  console.log(req.path);
  console.log(req.method);

  next();
});

// READ
app.get('/instrutores', (req, res) => {
  res.json(data);
});

// CREATE
app.post('/instrutores', (req, res) => {
  console.log(`POST users: ${req.user.name}`);
  const instrutor = req.body;

  data.push(instrutor);

  res.json({ok: true});
});

// READ
app.get('/instrutor/:id', (req, res) =>{
  const instrutorEncontrado = data
    .filter((instrutor) => instrutor.id === parseInt(req.params.id))[0];

  if (!instrutorEncontrado) throw new Error('Instrutor não encontrado');

  res.json(instrutorEncontrado);
});

app.get('/pesquisar', (req, res) => {
  console.log(req.query.nome);
  // const nome = req.query.nome;
  // const age = req.query.age;
  const { nome, age } = req.query;

  console.log(nome);
  console.log(age);

  const instrutorEncontrado = data
    .filter((instrutor) => instrutor.nome === nome)[0];

  if (!instrutorEncontrado) throw new Error('Instrutor não encontrado');

  res.json(instrutorEncontrado);
});


app.use((err, _req, res, _next) => {
  res.status(500).json({erro: err.message});
});


app.listen(port, () => console.log(`Example app listening on port 3000!`)); 