db.movies.updateOne({ title: "Batman" }, { $rename: { imdbRating: "estimaBudget" } });
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }