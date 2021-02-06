const fs = require('fs');

const getBetterMessage = (error) => {
  console.log(error);
  if (error.code === 'ENOENT') return `Arquivo não encontrado: ${error.path}`;

  return error.message;
};

fs.readFile('./arquivo1.txt', 'utf-8', (err, content) => {
  if (err) return console.error(`Erro ao ler o arquivo: ${getBetterMessage(err)}`);

  console.log(`Conteúdo do arquivo: ${content}`);
}); 