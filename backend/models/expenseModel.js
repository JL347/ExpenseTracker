const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please provide a title'],
		trim: true,
		maxLength: [50, 'Title cannot be more than 50 characters']
	},
	amount: {
		type: Number,
		required: [true, 'Please provide an amount'],
		maxLength: [20, 'Amount cannot be more than 20 characters'],
		trim: true
	},
	type: {
		type: String,
		default: 'income'
	},
	date: {
		type: Date,
		required: true,
	},
	category: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
		required: true,
		maxLength: 20,
		trim: true
	},
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);