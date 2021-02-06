/* Exercício 2 : Agora, pegue a função do exercício 1 e refatore ela para async/await .
Sua função tem que funcionar exatamente igual à do exercício 1, mas você não pode utilizar nenhum .then em seu código.
Pa|a cada exercício abaixo, escreva o script primeiro utilizando callbacks, depois promises e, por último, async/await. */

 async function tresParam(nun1, nun2, nun3) {
   if (typeof nun1 !== 'number' || typeof nun2 !== 'number' || typeof nun3 !== 'number') {
     return Promise.reject(new Error('Digite apenas números'));   
   }
   const sumNumbers = nun1 + nun2;
   const resultado = sumNumbers * nun3;
   return resultado < 50 ? Promise.reject(new Error('Valor muito baixo')) : resultado;
  };
  console.log(tresParam(12,43,4));
