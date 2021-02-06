const fs = require('fs');

fs.writeFile('./meu-arquivo.txt', 'Meu textão', (err) => {
  if (err) {
    throw err;
  }
  console.log('Arquivo salvo');
});
// Rode o script com node writeFile.js . Repare que o conteúdo do meu-arquivo.txt foi alterado para "Meu textão".
// =---------------------
const fs = require('fs');

const text = 'Texto teste 2';

async function writingFiles() {
  await fs.writeFile('./meu-arquivo.txt', text, (err) => {
    if (err) return console.log(err);
    console.log(text);
  })
}

writingFiles();
// --------------------------------
//Note que bastou adicionar o async na declaração da função principal, e o await na função writeFile .
// Há também um método nativo do módulo fs que transforma suas funções em promises. Para utilizá-lo, basta modificar a importação do módulo, como no exemplo abaixo:
const fs = require('fs').promises;

const text = 'Texto teste 3';

function writingFiles() {
  fs.writeFile('./meu-arquivo.txt', text);
}
writingFiles();

// ____________________________ ---------
// Por último, há também, no módulo util , uma propriedade chamada promisify . Ela transforma o parâmetro recebido em uma promise. Veja no exemplo:
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

const text = 'Texto teste 4';

function writingFiles() {
  writeFile('./meu-arquivo.txt', text);
}

writingFiles();

// -------------------------
/* Nota: não estamos utilizando tratamento de erro nos exemplos acima por fins didáticos. É recomendável que isso sempre seja feito.
Ainda sobre o writeFile , você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro opcional para os métodos writeFile e writeFileSync . A opção flag especifica como o arquivo deve ser aberto e manipulado. O padrão é 'w' , que especifica que o arquivo deve ser aberto para escrita. Se o arquivo não existir, ele é criado. Caso contrário, ele é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito. A flag 'wx' , por exemplo, funciona como 'w' , mas lança um erro caso o arquivo já exista: */

const fs = require('fs');

fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' }, function (err) {
  // A flag wx abre o arquivo para escrita caso ele não exista
  /*
    Flag =>
      w: write
      x: exclusive
  */
  // Se o arquivo existir, um erro é retornado
  if (err) throw err;
  console.log('Arquivo salvo');
});

// -------------------------
// Note que, quando rodamos o código com a flag wx , tentando escrever no arquivo meu-arquivo.txt , é gerado o seguinte erro:

/* 
 [...]

[Error: EEXIST: file already exists, open './meu-arquivo.txt'] {
  errno: -17,
  code: 'EEXIST',
  syscall: 'open',
  path: './meu-arquivo.txt'
} 
*/