/* 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . 
Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:
{
  "_id": "MG",
  "mediaVendas": 9407.129225352113,
  "totalVendas": 142
} */
db.vendas.aggregate([
     {
   $match: {
         dataVenda: {
   $gte: ISODate('2018-12-31'),
   $lte: ISODate('2020-01-01')
         }
       }
     },
     {
      $lookup: {
        from: 'clientes',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'dadosCliente'
      }
    },
    {
      $unwind: "$dadosCliente"
    },
    {
      $group: {
        _id: "$dadosCliente.endereco.uf",
        totalVendas: {
          $sum: 1
        }
      }
    },
    {
      $sort: {
        totalVendas: -1
      }
    },
    { $limit: 3 },
    {
      $project: {
        _id: 0,
        uf: "$_id",
        totalVendas: 1
      }
    }
   ]);