db.movies.updateMany( { $or: [{ title: "Batman", title: "Home Alone" }] }, { $max: { imdbRating: 17 }});
// { "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 1 }