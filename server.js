const express = require('express');
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const path = require("path");

const portfolioRoute = require('./routes/portfolioRoute');
app.use(express.json());
app.use("/api/portfolio", portfolioRoute);


// static files
app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", function (req, res) {
    res.sendFile((path.join(__dirname, "./client/dist/index.html")));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
