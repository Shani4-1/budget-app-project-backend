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
    newTransaction.id = uuidv4(); // add the id property
    transactionsArray.push(newTransaction);
    res.status(201).json(newTransaction);
  });
  

   

//Get one transaction by id
transactions.get("/:id", (req, res) => {
    const { id } = req.params;
    const transaction = transactionsArray.find((t) => t.id === id);
    if (transaction) {
      res.status(201).json(transaction);
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  });
  

//Update transaction 
transactions.put("/:id", transactionsValidator, (req, res) => {
    const { id } = req.params;
    const updatedTransaction = req.body;
    updatedTransaction.id = id; // set the ID to the parameter value
    const index = transactionsArray.findIndex((t) => t.id === id);
    if (index !== -1) {
      transactionsArray[index] = updatedTransaction;
      res.status(200).json(updatedTransaction);
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  });
  


//Delete transaction
transactions.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = transactionsArray.findIndex(transaction => transaction.id === id);
    if (index !== -1) {
        const deletedTransaction = transactionsArray.splice(index, 1)[0];
        res.status(201).json(deletedTransaction);
    } else {
        res.status(404).json({error: "Page Not Found"});
    }
});



module.exports = transactions;