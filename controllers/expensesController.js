const Expense = require('../models/Expense');

const addExpense = async (req, res) => {
  try {
    const { title, date, amount, categoryId } = req.body;

    const expense = new Expense({
      title,
      date,
      amount,
      categoryId
    });

    await expense.save();

    res.status(201).json({ message: 'Expense added successfully', expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getExpenses = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalExpenses = await Expense.countDocuments();

    const expenses = await Expense.find()
      .skip(skip)
      .limit(limit)
      .sort({ date: -1 });

    res.json({
      totalExpenses,
      currentPage: page,
      totalPages: Math.ceil(totalExpenses / limit),
      expenses
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getGroupedExpenses = async (req, res) => {
  try {
    const expenses = await Expense.aggregate([
      {
        $group: {
          _id: '$categoryId',
          expenses: { $push: '$$ROOT' }
        }
      }
    ]);

    res.json({ expenses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


module.exports = { addExpense, getExpenses, getGroupedExpenses };
