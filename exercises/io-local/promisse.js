const p = new Promise((resolve, reject) => {
  // Aqui é onde vamos realizar a lógica que precisamos
  // para resolver ou rejeitar a promise
});
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}

// --------------------
// ...

readFilePromise('./file.txt')
  .then((content) => {
    console.log(`Lido arquivo com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivo: ${err.message}`);
  });