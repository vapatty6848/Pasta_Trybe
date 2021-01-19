db.movies.updateOne({ title: "Home Alone" }, { $set: { budget: 15, imdRating: 5.5 } });
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }