const assert = require('assert');
// escreva a função addOne aqui para passar nos testes
/* Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código:
Copie os testes já implementadas e desenvolva as funções. Separe as funções em arquivos para evitar qualquer tipo de problema.
Escreva a função addOne para passar nos testes já implementados */


const myArray = [31, 57, 12, 5];
function addOne (myArray)  {
 const output = [];
  for(let i = 0; i < myArray.length; i += 1 ) {
    output.push(  myArray[i] + 1);
  }
  return output;
}
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);