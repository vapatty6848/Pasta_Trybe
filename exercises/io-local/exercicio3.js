/* Exercício 3 : Crie um script que, sem utilizar módulos de terceiros:
DICA : Leia sobre o módulo readline do node .
Pergunte ao usuário qual arquivo deseja ler.
Leia o arquivo indicado (Não se esqueça de realizar tratamento de erros caso o usuário informe um arquivo que não existe).
Escreva na tela o conteúdo do arquivo e a quantidade de bytes. */


const fs = require('fs');
const path = require('path');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o caminho do arquivo que deseja ler: ', (answer) => {
  fs.readFile(path.resolve(__dirname, answer), (err, file) => {
    if (err) return console.log(`Erro ao ler arquivo: ${err.message}`);

    console.log(file.toString('utf8'));
    console.log('---------------------');
    console.log(`Arquivo de ${file.byteLength} bytes, lido em ${scriptEnd} ms`);

    rl.close();
  });
});

// ------------------------------------------
// Utilizando Promises
//
const fs = require('fs');
const util = require('util');
const path = require('path');
const readline = require('readline');

const readFile = util.promisify(fs.readFile);

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

question('Digite o caminho do arquivo que deseja ler: ')
  .then((answer) => readFile(path.resolve(__dirname, answer)))
  .then((file) => {
    console.log(file.toString('utf8'));
    console.log('---------------------');
    console.log(`Arquivo de ${file.byteLength} bytes, lido em ${scriptEnd} ms`);
  })
  .catch(err => console.log(`Erro ao ler arquivo: ${err.message}`));
  
  //---------------------------------------------
  // Utilizando async/await
  //
  const fs = require('fs');
const util = require('util');
const path = require('path');
const readline = require('readline');

const readFile = util.promisify(fs.readFile);

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const answer = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    const file = await readFile(path.resolve(__dirname, answer));
    console.log(file.toString('utf8'));
    console.log('---------------------');
    console.log(`Arquivo de ${file.byteLength} bytes, lido em ${scriptEnd} ms`);
  } catch (err) {
    console.log(`Erro ao ler arquivo: ${err.message}`);
  }
};

start();