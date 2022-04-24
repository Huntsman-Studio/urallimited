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
app.post('/sendEmail', (req, res) => {

    // console.log('Request name');
    let user = req.body;
    // console.log(user);

    sendMail(user, (err, info) => {

        if ( err ) {
            console.log(err);
            // req.status(400);
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
        host: 'mail.klamaj.eu',
        port: 465,
        secureConnection: true,
        auth: {
            user: 'test@klamaj.eu',
            pass: 'Testing@Mailer'
        }
    });

    console.log(transporter);


    // MailOptions
    const mailOptions = {
        from: user.name + ' / ' + user.email,
        to: 'kri.lamaj@gmail.com',
        subject: 'Mail from contact form Ural Limited',
        html: '<p>' + user.message + '</p>'
    }

    // console.log(mailOptions);

    transporter.sendMail(mailOptions, callback);
}