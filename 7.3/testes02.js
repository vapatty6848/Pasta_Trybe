const assert = require('assert');
function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
assert.strictEqual(typeof myRemove, 'function');
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const myList = [5, 6, 7, 8];
//Verifique se o array passado por parâmetro não sofreu alterações
myRemove(myList, 5);
 assert.deepStrictEqual(myList, [5, 6, 7, 8]);
 
 //Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
 assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4,]);

