/* Bônus
Exercício 1 : Crie um script que, utilizando recursão, realize o fatorial de um número n .
Utilize o pacote inquirer para solicitar o valor de n ao usuário;
Utilize a propriedade validate do inquirer para validar o valor informado para n . A função de validação deve utilizar outras duas funções para garantir que n atenda às condições abaixo:
Ser um número;
Ser um inteiro.
Lembre-se de converter o valor retornado pelo inquirer para inteiro utilizando parseInt() . Não se esqueça de informar a base 10 como segundo parâmetro.
Resolução :
Criar uma nova pasta onde o script será criado;
Executar npm init e passar as informações solicitadas;
Instalar o pacote inquirer com o comando npm install inquirer ;
Criar o script, que deve ficar mais ou menos assim: */

const inquirer = require('inquirer');

function isInteger (number) {
  return parseInt(number) === parseFloat(number);
}

function validaX (value) {
  if (value < 0) return 'Informe um número maior ou igual a 0';
  if (Number.isNaN(value) || !isInteger(value)) return 'Informe um número inteiro';
  return true;
}

function realizaFatoracao (x) {
  return [0, 1].includes(x) ? 1 : x * realizaFatoracao(x - 1);
}

async function realizaCalculo () {
  const answers = await inquirer.prompt([{
    type: 'input',
    validate: validaX,
    name: 'x',
    message: 'Informe o valor de x:'
  }]);

  const x = parseInt(answers.x, 10);

  console.log('x: %s', x);

  const resultado = realizaFatoracao(x);

  console.log('Resultado: %s', resultado);
}

realizaCalculo();