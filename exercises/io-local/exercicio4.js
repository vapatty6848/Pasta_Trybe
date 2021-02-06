/* Exercício 4 : Crie um script que, sem utilizar módulos de terceiros, substitua uma palavra por outra em um arquivo escolhido pelo usuário com o seguinte fluxo:
Perguntar ao usuário qual arquivo deseja utilizar.
Ler o arquivo (Não se esqueça de realizar tratamento de erros caso o usuário informe um arquivo que não exista).
Solicitar a palavra a ser substituída.
Solicitar a nova palavra, que deve substituir a palavra anterior.
Mostrar o novo conteúdo do arquivo e realizar a substituição.
Perguntar o nome do arquivo de destino.
Salvar o novo arquivo no caminho de destino (Caso o usuário informe um arquivo já existente, confirmar antes de sobrescrever).
// -------------------------------
Resolução
Utilizando callbacks */ //---------------------------------
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o caminho do arquivo: ', (sourcePath) => {
  fs.readFile(path.resolve(__dirname, sourcePath), (err, file) => {
    if (err) return console.log(`Erro ao ler arquivo: ${err.message}`);

    rl.question('Informe o texto que deseja substituir: ', (oldText) => {
      rl.question('Informe o novo texto: ', (newText) => {
        const newContent = file.toString('utf8').replace(new RegExp(oldText, 'g'), newText);

        console.log('Novo conteúdo');
        console.log('-----------------');
        console.log(newContent);

        rl.question('Digite o caminho do arquivo de destino: ', (destPath) => {
          fs.readFile(path.join(__dirname, destPath), (err, file) => {
            if (!err) {
              rl.question('Deseja realmente sobrescrever o arquivo? (s/n): ', (proceed) => {
                if (proceed !== 's') return rl.close();

                fs.writeFile(path.join(__dirname, destPath), newContent, () => {
                  rl.close();
                });
              });
              return;
            }

            fs.writeFile(path.join(__dirname, destPath), newContent, () => {
              rl.close();
            });
          });
        });
      });
    });
  });
});

// ------------------------------------------------
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

question('Informe o caminho do arquivo: ')
  .then((sourcePath) => {
    return readFile(path.join(__dirname, sourcePath));
  })
  .then((file) => {
    question('Informe o texto que deseja substituir: ')
      .then((oldText) => {
        question('Informe o novo texto: ')
          .then((newText) => {
            const newContent = file.toString('utf8').replace(new RegExp(oldText, 'g'), newText);

            console.log('Novo conteúdo');
            console.log('-----------------');
            console.log(newContent);

            question('Digite o caminho do arquivo de destino: ')
              .then((destPath) => {
                readFile(path.join(__dirname, destPath))
                  .then((file) => {
                    question('Deseja realmente sobrescrever o arquivo? (s/n): ')
                      .then((proceed) => {
                        if (proceed !== 's') return;

                        fs.writeFile(path.join(__dirname, destPath), newContent, () => { });

                        return;
                      });
                  })
                  .catch(() => {
                    fs.writeFile(path.join(__dirname, destPath), newContent, () => { });
                  });;
              });
          });
      });
  })
  .catch(err => console.log(`Erro ao ler arquivo: ${err.message}`));

  // --------------------------------------------
  //  Utilizando async / await
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
  const sourcePath = await question('Informe o caminho do arquivo: ');

  try {
    const file = await readFile(path.join(__dirname, sourcePath));
    const oldText = await question('Informe o texto que deseja substituir: ');
    const newText = await question('Informe o novo texto: ');

    const newContent = file.toString('utf8').replace(new RegExp(oldText, 'g'), newText);

    console.log('Novo conteúdo');
    console.log('-----------------');
    console.log(newContent);

    const destPath = await question('Digite o caminho do arquivo de destino: ');
    const destFile = await readFile(path.join(__dirname, destPath))
      .then(async (file) => {
        const proceed = await question('Deseja realmente sobrescrever o arquivo? (s/n): ');

        if (proceed !== 's') return;

        fs.writeFile(path.join(__dirname, destPath), newContent, () => { });

        return;
      })
      .catch(() => {
        fs.writeFile(path.join(__dirname, destPath), newContent, () => { });
      });
  } catch (err) {
    console.log(`Erro ao ler arquivo: ${err.message}`);
  }
}

start();
