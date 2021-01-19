db.movies.updateMany( { },{ $unset: { budget: "", estimaBudget: "" } });
// { "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }