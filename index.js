const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

//Routes
app.use(express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/homepage"));
app.use("/India", require("./routes/state"));
app.listen(port);