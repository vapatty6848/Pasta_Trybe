const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
 let output = [];
 for(let i = 0; i < words.length; i += 1) {
   output.push(words[i].length);
 }
 console.log(output);
 return(output);
};
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
/* Escreva a função wordLengths para passar nos testes já implementados.  */