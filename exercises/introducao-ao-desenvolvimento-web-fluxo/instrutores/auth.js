const auth = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization === '123') {
    req.user = { name: 'Admin' }

    next();
  } else {
    return res.status(500).json({error: "Não autorizado"});
  }
}

module.exports = auth;