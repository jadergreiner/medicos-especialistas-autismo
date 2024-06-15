const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to MongoDB and start server
mongoose.connect('mongodb://localhost:27017/autismDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('Database connection error:', err);
});

module.exports = app; // Export for testing
