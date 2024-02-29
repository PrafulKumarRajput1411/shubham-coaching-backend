const sendEmail = require("../utils/nodemailer")
const sendContactUsEmail = async (req, res) => {
    // res.status(200).json({ message: "working" })
    let response = await sendEmail('shukumarrajput@gmail.com', 'Testing', '');
    // if (response == 'response') {
    res.status(200).json({ message: "Mail Send Successfully", status: response })
    // }
}

module.exports = {
    sendContactUsEmail
}