
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    contact_us_uuid: {
        type: String,
        required: true,
        unique: true
    },
    contact_us_name: {
        type: String,
    },
    contact_us_email: {
        type: String,
    },
    contact_us_phone: {
        type: String,
    },
    contact_us_subject: {
        type: String,
    },
    contact_us_message: {
        type: String
    },
    contact_us_send_date: {
        type: Date,
        default: Date.now
    }
});

const ContactUs = mongoose.model("contact-us", userSchema);

module.exports = ContactUs 