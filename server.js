const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
const dbURI = 'mongodb://localhost:27017/parkingSystem';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Parking System API');
});

// Import and use routes
const carRoutes = require('./routes/carRoutes');
app.use('/cars', carRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});