const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const URL = process.env.MONGO_URL;

mongoose.set("strictQuery", true);

const connectToMongo = async () => {
    try {
        const db = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to MongoDB at host: ${db.connection.host}`);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
};

module.exports = connectToMongo;


// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config()

// const URL = process.env.MONGO_URL
// mongoose.set('strictQuery', true)
// const connectToMongo = async () => {
//     try {
//         let db = await mongoose.connect(URL)
//         console.log(db.connection.host, "conneted");
//     } catch (error) {
//         console.log(error, "Failed");
//     }
// }

// module.exports = connectToMongo;