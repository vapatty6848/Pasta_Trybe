db.movies.updateOne(
  {title: "Home Alone"},
  {$set: {
    "cast.$[elemento].character": "Marv"
  }},
  {arrayFilters: [{"elemento.actor": "Daniel Stern"}]}
)