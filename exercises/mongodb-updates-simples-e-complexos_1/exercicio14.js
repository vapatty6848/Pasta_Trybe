db.xmen.updateMany({ class: "unknown" }, { $unset: { class: "" } });
// { "acknowledged" : true, "matchedCount" : 15, "modifiedCount" : 15 }