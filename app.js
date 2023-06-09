// Dependencies
const express = require("express");
const transactionsControler = require("./controllers/transactionsController.js")
const cors = require("cors");


const app = express();


app.use(express.json());
app.use(cors());
app.use("/transactions", transactionsControler)

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Budget App! For Docs, please visit ");
});

//Error Handling
app.get("*", (req, res) => {
    res.status(404).json({"error" : "Page Not Found"})
});



module.exports = app;