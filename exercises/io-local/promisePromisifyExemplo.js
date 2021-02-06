const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);

readFilePromise('./arquivo1.txt')
  .then((content) => console.log(content.toString('utf-8')))
  .catch((err) => {
    if (err.code == 'ENOENT') console.log('arquivo não existe');
    if (err.code == 'EACCES') console.log('arquivo sem permissão');
  });