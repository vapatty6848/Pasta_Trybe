/* Exercício 2 : Crie um script que, sem utilizar recursão, exiba o valor dos n primeiros elementos da sequência de fibonacci .
Não imprima o valor 0 , uma vez que ele não está incluso na sequência;
Quando n = 10 , exatamente 10 elementos devem ser exibidos;
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

function validaN (value) {
  if (value < 0) return 'Informe um número maior ou igual a 0';
  if (Number.isNaN(value) || !isInteger(value)) return 'Informe um número inteiro';
  return true;
}

function calculaElemento (n) {
  let a = 1;
  let b = 1;

  for (; n >= 0; n--) {
    if (b) console.log(b);
    const temp = a;
    a = a + b;
    b = temp;
  }

  console.log(b);
  return b;
}

async function realizaCalculo () {
  const answers = await inquirer.prompt([{
    type: 'input',
    validate: validaN,
    name: 'n',
    message: 'Informe o valor de n:'
  }]);

  const n = parseInt(answers.n, 10);

  console.log('n: %s', n);

  calculaElemento(n - 2);
}

realizaCalculo();