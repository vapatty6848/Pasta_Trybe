db.xmen.updateMany(
  {
    class: { $exists: false }
  },
  { 
inc: { power: -100 }
  }
);