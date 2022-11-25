const jwt = require("jsonwebtoken");
const SECRET_KEY = "ALOK";

const auth = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401).json("You are not authorised");
  }
  try {
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.id;
  } catch (err) {
    res.status(401).json("Error in authorization");
  }
  next();
};
module.exports = auth;
