const logout = (req, res) => {
  console.log(req.session.isAuth);
  req.session.destroy((error) => {
    if (error) {
      return res.status(404).send({
        success: false,
        message: "Logout failed.",
        error,
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Logout successful.",
      });
    }
  });
};

module.exports = logout;
