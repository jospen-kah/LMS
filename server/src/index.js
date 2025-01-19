const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("../src/Config/database");
const router = require('../src/Routes/courses');
const authRouter = require('../src/Routes/auth')
const quizRouter = require('../src/Routes/quiz')
const modRouter = require('../src/Routes/module')
const cors = require('cors')

const app = express();
dotenv.config();

// Middleware
app.use(cors())
app.use(express.json());
app.use('/courses', router);
app.use('/auth', authRouter);
app.use('/quiz', quizRouter)
app.use('/module', modRouter);

const PORT = process.env.PORT || 5000;

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