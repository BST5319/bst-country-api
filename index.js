const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Routes
app.use("/", require("./routes/homepage"));
app.use("/India", require("./routes/state"));
app.listen(port);