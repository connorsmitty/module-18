const mongoose = require('mongoose');

// Define the database URL
const dbUrl = 'mongodb://localhost:27017/thoughts-db';

// Connect to the database
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
 .then(() => {
    console.log('Connected to the database!');
  })
 .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });