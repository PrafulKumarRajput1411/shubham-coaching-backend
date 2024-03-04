const express = require('express');
const nodemailer = require('nodemailer');
const sendEmail = async (email, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 80,
            secure: true,
            auth: {
                user: 'radianttutorials11@gmail.com',
                pass: 'wjgfozczrpkvujmr'
            }
        });
        await transporter.sendMail({
            from: 'radianttutorials11@gmail.com',
            to: email,
            subject: subject,
            html: html,
        });
        return 'success';
    } catch (error) {
        return error
        console.log(error)
    }
}
module.exports = sendEmail