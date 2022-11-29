const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to gacoder.info" });
});



app.listen(3000);