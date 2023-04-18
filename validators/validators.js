const transactionsValidator = (req, res, next) => {
    if (req.body.hasOwnProperty('date') && req.body.hasOwnProperty('amount')) {
        next()
      } else {
        return res.status(400).json({error : "Transactions must contain a date and a amount"})
      }
};

module.exports = transactionsValidator;