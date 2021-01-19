db.movies.updateMany({}, { $set: { sequels: 0 } } );
// { "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }