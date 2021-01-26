// 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .
db.vendas.aggregate([
  {
$match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] },
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  {
$group: {
       _id: "$clienteId",
       valorTotal: {
$sum: "$valorTotal"
       }
    }
  },
  {
$sort: {
      valorTotal: -1
    }
  },
  {
$limit: 10
  }
]);