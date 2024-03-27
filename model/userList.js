const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    user_uuid: {
        type: String
    },
    user_name: {
        type: String
    },
    user_email: {
        type: String
    },
    user_password: {
        type: String,
    },
    user_type: {
        type: String
    }
})

const User = mongoose.model('users', UserSchema);
module.exports = User
