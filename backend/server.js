const { json } = require("express");
const express = require("express");
const noteRoute = require("./src/routes/noteRoutes");
const userRouter = require("./src/routes/userRoutes");
const app = express();
const port = 7000;
require("./src/db/conn");

app.use(json());
app.use("/user", userRouter);
app.use("/note", noteRoute);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
