const { v4: uuidv4 } = require('uuid');
const connection = require('../model/main');
const { DB } = require('../config/database');
const uuidGenerator = require("../utils/uuidGenerator");
const { getListOfContactUsData } = require('../utils/queryList');

const getUserData = async (req, res) => {
    let uuid = uuidGenerator();

    console.log(uuid)
    let query = getListOfContactUsData;
    console.log(query)
    connection.query(query, [true], (error, results, fields) => {
        if (error) {
            return res.status(500).json({ status: false, message: error })
        } else {
            return res.status(200).json({ status: true, message: results })
        }
    })
}
const generateUnqiueId = async (req, res) => {

    // Generate a new UUID
    const uniqueId = uuidv4();

    console.log('Unique ID:', uniqueId);
    // connection.query('SELECT * FROM customers', [true], (error, results, fields) => {
    //     // console.log(results)
    //     results.forEach((element, index) => {
    //         // console.log(element)
    //         connection.query('select * from orders where customer_id=' + element.customer_id, [true], (error, Orderresults, fields) => {
    //             // console.log(Orderresults)
    //             results[index]['ordersList'] = Orderresults;
    //             console.log(results)
    //             if (results.length == index + 1) {
    //                 return res.status(200).json({ data: results })
    //             }
    //         })
    //     })
    // });
    // connection.query('select * from customers inner join orders on customers.customer_id=orders.customer_id', [true], (error, resuls, fields) => {
    //     console.log(resuls)
    //     return res.status(200).json({ data: resuls })
    // })

    // console.log(data)
    // return res.status(200).json({ id: uniqueId, data: data.j })
}
module.exports = {
    getUserData,
    generateUnqiueId
}