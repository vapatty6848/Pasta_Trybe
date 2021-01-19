db.xmen.updateMany(
  {
  class: { $in: ["omega", "gama"] } 
  },
  { 
    $max: { power: 500 }
  }
);