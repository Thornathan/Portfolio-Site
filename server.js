const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/send", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>
    `;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "jlanewebdev@gmail.com",
        pass: "Basket>1",
      },
    });

    let mailOptions = {
      from: `${name}`,
      to: "jlanewebdev@gmail.com",
      replyTo: `${email}`,
      subject: "New Message from Contact Form",
      text: `${message}`,
      html: htmlEmail,
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        res.json({
          msg: "fail",
        });
      } else {
        res.json({
          msg: "success",
        });
      }
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
