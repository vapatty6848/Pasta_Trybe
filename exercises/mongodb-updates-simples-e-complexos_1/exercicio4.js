db.movies.updateOne({ title: "Batman" }, { $inc: { imdbRating: 2 } });
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }