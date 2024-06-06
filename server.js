const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

// Import the router files
const userRoutes = require('./routes/userRoutes');
//const candidateRoutes = require('./routes/candidateRoutes');

// Test base route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Use the routers
app.use('/user', userRoutes);
//app.use('/candidate', candidateRoutes);

app.listen(PORT, HOST,() => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
