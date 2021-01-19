db.movies.updateOne({ title: "Godzilla" }, { $set: { budget: 1 } });
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }