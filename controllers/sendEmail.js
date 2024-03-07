const { contactUsTempalte } = require("../utils/emailTemplate/contactUs");
const sendEmail = require("../utils/nodemailer");
const connection = require('../model/main');
// const uuid=require('../utils/uuidGenerator');
const uuidGenerator = require("../utils/uuidGenerator");
const { saveContactUsData } = require("../utils/queryList");
const sendContactUsEmail = async (req, res) => {
    console.log(req.body)
    try {
        let name = req.body.name
        let email = req.body.email
        let phone = req.body.phone
        let subject = req.body.subject
        let message = req.body.message
        let html = contactUsTempalte(phone, name, email, message);
        await sendEmail('radianttutorials11@gmail.com', subject, html);
        let uuid = uuidGenerator();
        console.log(uuid)
        const query = saveContactUsData;
        connection.query(query, [uuid, name, email, phone, subject, message], function (errors, results) {
            if (errors) {
                return res.status(500).json({ status: false, message: errors });
            } else {
                res.status(200).json({ status: 200, message: "Mail Sent Succssfully", data: results });
            }
        })
    } catch (error) {
        res.status(500).json({ status: 500, message: error })
    }



}

module.exports = {
    sendContactUsEmail
}