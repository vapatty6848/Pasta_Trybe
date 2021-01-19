db.movies.updateOne({ title: "Batman" }, { $set: { imbRating: 7.7 } });
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }