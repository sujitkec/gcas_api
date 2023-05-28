const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile_number: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Orders"
        },
    ],
    isverified: {
        type: Boolean,
        default: false,
    },
    isadmin: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("User", userSchema);
