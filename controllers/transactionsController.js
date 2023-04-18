// Dependencies
const express = require("express");

// Configurations
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

//Routes

//All transactions
transactions.get("/", (req, res) => {
    res.send(transactionsArray)
});



module.exports = transactions;