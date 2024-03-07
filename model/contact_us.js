const { DataTypes, sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const contactUs = sequelize.define('contact_us_table', {
        contact_us_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        subject: {
            type: DataTypes.STRING
        },
        message: {
            type: DataTypes.STRING
        },
        send_date: {
            type: DataTypes.STRING,
            timestamps: true
        }
    })
    return customers
}