/* 
Com a expressão $add , é possível somar valores numéricos ou datas. Se um dos argumentos for do tipo date , o outro argumento será tratado como milissegundos e adicionado à data.
Considere os seguintes documentos na coleção sales :

{ _id: 1, item: "abc", price: 10, fee: 2, date: ISODate("2014-03-01T08:00:00Z") },
{ _id: 2, item: "jkl", price: 20, fee: 1, date: ISODate("2014-03-01T09:00:00Z") },
{ _id: 3, item: "xyz", price: 5,  fee: 0, date: ISODate("2014-03-15T09:00:00Z") } */
//Utilizando a expressão $add no estágio $project , você pode criar um novo campo com o valor 
// total somando os campos price e fee :
db.sales.aggregate([
  { $project: { item: 1, total: { $add: ["$price", "$fee"] } } }
]);

db.sales.aggregate([
  { $project: { item: 1, billing_date: { $add: ["$date", 2.592e+8] } } }
]);

db.sales.aggregate([
  { $project: { item: 1, billing_date: { $add: ["$date", 3 * 24 * 60 * 60000] } } }
]);


/* Exercício de fixação
Utilizando o banco de dados storage , faça o seguinte exercício:
Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.
 */
db.produtcts.aggregate([
  { 
    $project: { name: 1, total: { $add:  ["$purchase_price", "$taxes"] } }
  }
]);
/* Utilizando o banco de dados storage , faça o seguinte exercício:
Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e 
seu valor de venda. */
db.produtcts.aggregate([
  { 
    $project:  {
      name: 1, total: {
        $subtract: [
          { $add: ["$purchase_price", "$taxes"] },
          "$sale_price"
        ]
      }
    }
  }
 
]);

/* Retorne o menor número inteiro relativo ao preço de venda de cada produto;
*/
db.produtcts.aggregate([
  { $project: { sale_price: 1, ceilingPrice: { $ceil: "$sale_price" } } }
]);

/* 
Retorne o maior número inteiro relativo ao lucro total sobre cada produto */.
db.produtcts.aggregate([
  { $project: { sale_price: 1, floorPrice: { $floor: "$sale_price" } } }
]);

/* A expressão $abs retorna o valor absoluto de um número.
Essa expressão é muito útil para encontrar a diferença entre dois valores. 
Veja um exemplo considerando os documentos da coleção ratings :
Aplicando a expressão $abs combinada com a expressão $subtract no estágio $project,
podemos retornar a diferença entre os valores dos campos start e end : */

db.ratings.aggregate([
  {
    $project: {
      delta: {
        $abs: { $subtract: ["$start", "$end"] }
      }
    }
  }
]);


// Calcule o valor absoluto do lucro total de cada produto.
db.produtcts.aggregate([
  {
    $project: {
      lucro_total: {
        $abs: { 
          $subtract:
           [
           { $add: ["$purchase_price", "$taxes"] },
           "$sale_price"
           ]
        }
      }
    }
  }
]);

/* A expressão $multiply multiplica dois valores numéricos.
 Esses valores devem ser passados num array , como nas outras expressões anteriores.
 Na agregação a seguir, utilizamos o $multiply no estágio $project para projetar um novo campo 
 chamado total , 
 que conterá o valor da multiplicação entre os campos price e quantity :
 */
db.sales.aggregate([
  {
    $project: {
      date: 1,
      item: 1,
      total: {
        $multiply: ["$price", "$quantity"]
      }
    }
  }
]);

/* Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a 
quantidade;
será o lucro total de cada produto caso todo o estoque seja vendido 
*/
db.produtcts.aggregate([
  {
   $project: {
     name: 1, valueTotal: {
       $multiply: ["$purchase_price", "$taxes"]
     }
   } 
  }
]);
/* A expressão $divide , como o próprio nome sugere, divide dois valores. O primeiro argumento é o dividendo , e o segundo é o divisor .
A agregação abaixo utiliza o $divide para dividir o valor do campo hours por 8 e calcular o número de dias de trabalho ( wokdays ): 
*/
db.planning.aggregate([
  {
$project: {
      name: 1,
      workdays: {
        $divide: ["$hours", 8]
      }
    }
  }
]);

// Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.
db.products.aggregate([
  {
   $project: {
    name: 1,
    promotion_value: {
      $divide: ["$sale_price", 2]
    } 
  }
 }
]);

/* O $addFields é um estágio que adiciona novos campos aos documentos. A saída desse estágio conterá todos os campos existentes nos documentos de entrada e adicionará os novos campos especificados.
Você pode incluir subdocumentos ou arrays de subdocumentos, utilizando o conceito de dot notation . Um pipeline pode conter mais de um estágio $addFields .
A operação de agregação abaixo utiliza o $addFields duas vezes para incluir três novos campos nos documentos de saída: 
*/
db.scores.aggregate([
  {
$addFields: {
      totalHomework: { $sum: "$homework" } ,
      totalQuiz: { $sum: "$quiz" }
    }
  },
  {
$addFields: {
      totalScore: {
$add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ]
      }
    }
  }
]);

/* Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade */