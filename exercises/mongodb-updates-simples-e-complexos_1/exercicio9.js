db.movies.updateOne({ title: "Godzilla" }, { $max: { imdbRating: 8.6 }, $set: { "category.1": "thriller"} });
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }