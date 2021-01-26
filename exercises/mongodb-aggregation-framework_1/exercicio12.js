/* 12 : Descubra quais as três uf s que mais compraram no ano de 2020 . Retorne os documentos 
no seguinte formato:
{
  "totalVendas": 10,
  "uf": "SP"
} */
db.vendas.aggregate([
  {
$match: {
      dataVenda: {
$gte: ISODate('2020-01-01'),
$lte: ISODate('2020-03-31')
      }
    }
  },
  {
$group: {
      _id: "$clienteId",
      totalCompras: {
$sum: 1
      }
    }
  },
  {
$match: {
      totalCompras: { $lt: 3 }
    }
  },
  {
$count: 'clientes'
  }
]);