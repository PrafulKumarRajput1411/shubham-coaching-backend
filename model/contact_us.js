// const { DataTypes, sequelize } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//     const contactUs = sequelize.define('contact_us_table', {
//         contact_us_id: {
//             type: DataTypes.STRING,
//             primaryKey: true,
//             allowNull: false
//         },
//         name: {
//             type: DataTypes.STRING
//         },
//         email: {
//             type: DataTypes.STRING
//         },
//         phone: {
//             type: DataTypes.STRING
//         },
//         subject: {
//             type: DataTypes.STRING
//         },
//         message: {
//             type: DataTypes.STRING
//         },
//         send_date: {
//             type: DataTypes.STRING,
//             timestamps: true
//         }
//     })
//     return customers
// }
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