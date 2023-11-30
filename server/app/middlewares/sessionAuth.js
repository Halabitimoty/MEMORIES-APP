const sessionauth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    return res.status(401).send({
      error: "session error.",
    });
  }
};

module.exports = { sessionauth };
