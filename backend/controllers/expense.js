const ExpenseSchema = require('../models/expenseModel');

exports.addExpense = async (req, res) => {
  const { title, amount, date, category, description } = req.body;
  
  const expense = ExpenseSchema({
    title,
    amount,
    date,
    category,
    description
  });

  try {
    // validations
    if (!title || !amount || !date || !category || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (amount <= 0 || !amount === 'number') {
      return res.status(400).json({ message: 'All fields are required' });
    }
    await expense.save();
    res.status(200).json({ message: 'Expense added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }

  console.log(expense);
}

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
}

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: 'Expense deleted successfully' }))
    .catch(() => res.status(500).json({ message: 'Server Error' }));
}