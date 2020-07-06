
const nodemailer = require("../models/nodemailer");

const mailer = {
  sendConfirmationEmail: function(email) {
    const { transporter, mailOptions } = nodemailer;

    const options = { ...mailOptions, to: email };
    transporter.sendMail(options, function(err, info) {
      if (err) {
        console.error("unable to send confirmation email");
      } 
      // can do something with info here
    });
  }
};

module.exports = mailer;