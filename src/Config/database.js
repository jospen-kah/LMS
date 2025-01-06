const dotenv = require("dotenv");
const mongoose = require("mongoose")


dotenv.config();
const MONGOURL = process.env.MONGO_URI;

const connectDB = async () => {

    try {
        await mongoose
            .connect(MONGOURL)
            .then(() => {
                console.log('Connected to MongoDB!');
            })
    }
catch (error) 
    {
        console.error("Error connecting to MongoDB", error.message);
    }

};
module.exports = connectDB;