const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    gender: {
        type: String,
    },
    type: {
        type: String,
    },
    status: {
        type: String,
    },
    mobile: {
        type: String,
    },
    created_at: {
        type: String,
    },
});

module.exports = mongoose.model("user", userschema);
