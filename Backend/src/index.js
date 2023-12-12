require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");

const productRouter = require("./modules/product/routes/product.route");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Api Routes
app.use("/api/product", productRouter);

app.listen(process.env.PORT);

module.exports = app;