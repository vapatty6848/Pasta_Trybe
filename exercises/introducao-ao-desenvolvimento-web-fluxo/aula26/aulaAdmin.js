const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/users', (req, res) => {
  res.send('/admin/users');
});

module.exports = adminRouter; 