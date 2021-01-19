db.movies.updateOne({ title: "Home Alone" }, { $inc: { imdbRating: 5 } });
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }