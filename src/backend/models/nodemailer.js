const nodemailer = require('nodemailer');
const config = require('../config/keys');

const transporter = nodemailer.createTransport({
    service: config.mailService,
    auth: {
        user: config.mailUser,
        pass: config.mailPass,
    },
});

const mailOptions = {
    from: config.mailUser,
    subject: 'portfolio contact',
    name:'contact name',
    text:
        'email text goes here ',
};

module.exports = {
    transporter,
    mailOptions,
};