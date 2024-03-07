const { DataTypes, sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const customers = sequelize.define('customers', {
        customer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        customer_name: {
            type: DataTypes.STRING
        },
        customer_address: {
            type: DataTypes.STRING
        }
    })
    return customers
}