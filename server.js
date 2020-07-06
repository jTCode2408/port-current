const express = require('express');
const bodyParser = require("body-parser");
// !!!!!REQUIRE IN OUR MAILER MODULE HERE!!!!!
const mailer = require("./actions/mailer");
const app = express();

// environmental variable or default 5000 
const PORT = process.env.PORT || 5000;


// this tells the app to attach a body object {} to the front end http req and parse any
// json data that was included 
app.use(bodyParser.json());

app.get('/contact', function(req, res) {
    const { email } = req.body;
    // !!!!!use nodemailer here!!!!!
    mailer.sendConfirmationEmail(email);
});

app.listen(PORT);