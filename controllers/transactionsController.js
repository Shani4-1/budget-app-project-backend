// Dependencies
const express = require("express");
const { v4: uuidv4 } = require('uuid');

// Configurations
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");
const transactionsValidator = require("../validators/validators.js");

//Routes

//All transactions
transactions.get("/", (req, res) => {
    transactionsArray.forEach(transaction => {
      if (!transaction.id) {
        transaction.id = uuidv4();
      }
    });
    res.send(transactionsArray)
  });

//Create new transaction
transactions.post("/", transactionsValidator, (req, res) => {
    const newTransaction = req.body;
    newTransaction.id = uuidv4();
    transactionsArray.push(newTransaction);
    res.status(201).json(newTransaction);
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
    const updatedTransaction = req.body;
    updatedTransaction.id = transactionsArray[index].id;
    transactionsArray[index] = updatedTransaction;
    res.status(200).json(updatedTransaction);
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