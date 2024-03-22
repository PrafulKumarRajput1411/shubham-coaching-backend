const { contactUsTempalte } = require("../utils/emailTemplate/contactUs");
const sendEmail = require("../utils/nodemailer");

// const uuid=require('../utils/uuidGenerator');
const uuidGenerator = require("../utils/uuidGenerator");
const ContactUs = require('../model/contact_us')
const sendContactUsEmail = async (req, res) => {
    console.log(req.body)
    try {
        let name = req.body.name
        let email = req.body.email
        let phone = req.body.phone
        let subject = req.body.subject
        let message = req.body.message
        let html = contactUsTempalte(phone, name, email, message);
        await sendEmail('', subject, html);
        let uuid = uuidGenerator();
        console.log(uuid)
        let obj = {
            contact_us_uuid: uuid,
            contact_us_name: name,
            contact_us_email: email,
            contact_us_phone: phone,
            contact_us_subject: subject,
            contact_us_message: message
        }
        try {
            await ContactUs.create(obj)
            res.status(200).json({ status: true })
        } catch (err) {
            res.status(500).json({ status: false, message: 'Something Went Wrong!' })
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: error })
    }



}

module.exports = {
    sendContactUsEmail
}