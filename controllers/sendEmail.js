const { contactUsTempalte } = require("../utils/emailTemplate/contactUs");
const sendEmail = require("../utils/nodemailer")
const sendContactUsEmail = async (req, res) => {
    console.log(req.body)
    try {
        let html = contactUsTempalte(req.body.phone, req.body.name, req.body.email, req.body.message);
        await sendEmail('radianttutorials11@gmail.com', req.body.subject, html);
        res.status(200).json({ status: 200, message: "Mail Sent Succssfully" })
    } catch (error) {
        res.status(500).json({ status: 500, message: error })
    }



}

module.exports = {
    sendContactUsEmail
}