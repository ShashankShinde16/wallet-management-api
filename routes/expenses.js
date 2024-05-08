const express = require('express');
const router = express.Router();
const { addExpense, getExpenses, getGroupedExpenses} = require('../controllers/expensesController');

router.post('/', addExpense);

router.get('/', getExpenses);

router.get('/grouped', getGroupedExpenses);

module.exports = router;
