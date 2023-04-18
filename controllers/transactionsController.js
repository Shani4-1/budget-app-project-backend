// Dependencies
const express = require("express");

// Configurations
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");
const transactionsValidator = require("../validators/validators.js");

//Routes

//All transactions
transactions.get("/", (req, res) => {
    res.send(transactionsArray)
});

//Create new transaction
transactions.post("/", transactionsValidator, (req, res) => {
    transactionsArray.push(req.body);
    res.status(201).json(transactionsArray[transactionsArray.length - 1])
});

   

//Get one transaction by index
transactions.get("/:index", (req, res) => {
    const { index} = req.params;
    if (transactionsArray[index]) {
        res.status(201).json(transactionsArray[index]);
    } else {
        res.redirect(301, "/transactions");
    }
});

//Update transaction 
transactions.put("/:index", transactionsValidator, (req, res) => {
    const { index } = req.params;
    if (transactionsArray[index]) {
        transactionsArray[index] = req.body
        res.status(200).json(transactionsArray[index]);
    } else {
        res.status(404).json({error: "Not Found"})
    }
});

//Delete transaction
transactions.delete("/:index", (req, res) => {
    const { index } = req.params;
    if (transactionsArray[index]) {
        const deletedTransaction = transactionsArray.splice(index, 1)[0];
        res.status(201).json(deletedTransaction);
    } else {
        res.status(404).json({error: "Page Not Found"});
    }
});


module.exports = transactions;