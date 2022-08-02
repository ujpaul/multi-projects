const isAuthenticated = (req, res, next) => {
  const { authenticated } = req.body;
  if (authenticated === "authenticated") {
    next();
  } else {
    return res.send({
      message: "Anauthorized to access files",
    });
  }
};
export default isAuthenticated;
