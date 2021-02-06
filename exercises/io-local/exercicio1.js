/* Exercício 1 : Crie uma função que retorna uma promise.
Essa função deve receber três parâmetros, fazendo o tratamento de erro caso algum dos parâmetros não seja um número.
Caso algum dos parâmetros não seja do tipo Number , rejeite a promise e imprima na tela a frase "Digite apenas números".
Caso todos os parâmetros sejam do tipo Number , você deve somar os dois primeiros.
Depois, pegue o resultado da soma e multiplique pelo terceiro parâmetro, e caso seja menor que 50, rejeite a promise com a mensagem "Valor muito baixo".
Caso contrário, aceite a promise, imprimindo o resultado da multiplicação na tela. */

function tresParam(nun1, nun2, nun3) {
  const promise =  new Promise((resolve, reject) => {
   if(typeof nun1 !== 'number' || typeof nun2 !== 'number' || typeof nun3 !== 'number') reject(Error("Digite apenas números"));
   const resultado = (nun1 + nun2 );
   if(resultado < 50) reject(Error("valor muito baixo"))
   resolve(resultado * nun3)
  });
  return promise;
}
tresParam(12,43,4)
.then(result => console.log("sucesso: %s", result))
.catch(err => console.log("erro: ", err.message));