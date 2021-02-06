const fs = require('fs');

function readFilePromise(fileName) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, content) => {
      if (err && err.code == 'ENOENT') reject(`Erro ao ler arquivo que não existe: ${err.path}`);
      if (err && err.code == 'EACCES') reject(`Erro ao ler arquivo sem permissão: ${err.path}`);

      resolve(content);
    });
  });

  return promise;
}


readFilePromise('./arquivo1.txt')
  .then((content) => console.log(content))
  .catch((err) => console.log(err));