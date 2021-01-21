/* Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199 , exibindo apenas os campos title ,
 ratings e category . */

// { "title" : "Home Alone", "category" : [ "family", "comedy" ] }
db.movies.find(
  { $or: [
    { category: { $all: ['sci-fi'] } },
    { ratings: { $elemMatch: { $gt: 199 } } }
  ] },
  { _id: 0, title: 1, ratings: 1, category: 1 }
).pretty();

// db.movies.find({ $or: [{category: { $elemMatch: { $eq: "sci-fi" } } },{ ratings: { $elemMatch: { $gt:  199  } } }]}).pretty();
