const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("../src/Config/database");
const router = require('../src/Routes/courses');
const authRouter = require('../src/Routes/auth')

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use('/courses', router);
app.use('/auth', authRouter);


const PORT = process.env.PORT || 3000;

connectDB() 
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server connected on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1); // Exit the process if the database connection fails
  });