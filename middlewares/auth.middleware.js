const auth = (req, res, next) => {
  const user = req.headers.authorization;
  if (user !== "admin") {
    res.status(403).json({ msg: "Access forbidden. Insufficient permissions" });
  } else {
    next();
  }
};

module.exports = { auth };
