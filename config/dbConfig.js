const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', (err) => {
  console.error('Error connecting to database:', err);
});

connection.on('connected', () => {
  console.log('MongoDB connection successful');
});

module.exports = connection;
