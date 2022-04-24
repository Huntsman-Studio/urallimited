import fetch from "node-fetch";
import { ConditionalExpr } from "@angular/compiler";
import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Set app instance
const app = express();

// Configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

// Start app server on port 3000
app.listen(3000, () => {
    console.log('The server started on port 3000');
})



// define a send mail endpoint
app.post('/sendmail', (req, res) => {

    let newuser = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }

    console.log('Request name');
    let user = req.body;

    sendMail(user, (err, info) => {

        if ( err ) {
            console.log(err);
            req.status(400);
            req.send({error: "Failed to send emial"});
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    });
});

// SendMail function
const sendMail = (user, callback) => {
    const transporter = nodemailer.createTransport({
        host: 'linux16.name-servers.gr',
        port: 465,
        secure: false,
        auth: {
            user: 'test@klamaj.eu',
            pass: 'Testing@Mailer'
        }
    })
}

// MailOptions
const mailOptions = {
    from: newuser.name + ' / ' + newuser.mail,
    to: 'test@klamaj.eu',
    subject: 'Mail from contact form Ural Limited',
    html: '<p>' + newuser.message + '</p>'
}

// Send Mail
transporter.sendMail(mailOptions, callback);