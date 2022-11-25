const { signup, signin } = require("../controllers/userController");
const userRouter = require("express").Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);

module.exports = userRouter;
