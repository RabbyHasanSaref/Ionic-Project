const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const testUserRoutes = require('./routes/testRoutes');

app.use(express.json());
app.use('/', testUserRoutes);





mongoose.connect(process.env.MONGO_URI, {
    
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));