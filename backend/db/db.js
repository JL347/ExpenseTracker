const mongoose = require('mongoose');

const db = async () => {
    try {
			mongoose.set('strictQuery', false);
			await mongoose.connect(process.env.MONGO_URL)
			console.log('Connected to MongoDB')
    } catch (error) {
      console.error('Error connecting to MongoDB:');
    }
}

module.exports = {db}