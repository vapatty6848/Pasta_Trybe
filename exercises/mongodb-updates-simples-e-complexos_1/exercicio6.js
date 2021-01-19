db.movies.updateOne({ title: "Batman" }, { $mul: { imdbRating: 4 } });
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }