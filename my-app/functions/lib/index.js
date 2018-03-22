//import * as functions from 'firebase-functions';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const sendgrid = require('sendgrid');
const client = sendgrid('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');
function parseBody(body) {
    const helper = sendgrid.mail;
    const fromEmail = new helper.Email(body.from);
    const toEmail = new helper.Email(body.to);
    const subject = body.subject;
    const content = new helper.Content('text/html', body.content);
    const mail = new helper.Mail(fromEmail, subject, toEmail, content);
    return mail.toJSON();
}
exports.httpEmailSendGrid = functions.https.onRequest((req, res) => {
    return Promise.resolve()
        .then(() => {
        if (req.method !== 'POST') {
            const error = new Error('Only POST requests are accepted');
            throw error;
        }
        const request = client.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: parseBody(req.body)
        });
        return client.API(request);
    })
        .then((response) => {
        if (response.body) {
            res.send(response.body);
        }
        else {
            res.end();
        }
    })
        .catch((err) => {
        console.error(err);
        return Promise.reject(err);
    });
});
//nodemailer code run npm install nodemailer
/* const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport({
    host:  "smtp.gmail.com", // hostname
    secure:  true, // use SSL
    port:  465, // port for secure SMTP
   service : 'gmail',
    auth:  {
       // type: 'OAuth2',
        user:  `${gmailEmail}`,
        pass: `${gmailPassword}`,
       // clientId:  "945185891851-e5t77dg4d2qe6h57dui1rjt8op6ql0q5.apps.googleusercontent.com",
       // clientSecret:  "_ONwhRL8BXNilXLwi7z_NXQz",
       // refreshToken: "1/OOefFcq0pg1xBxk1nVx2YvZKIwfWAvFMLImVpb56j7Q"
    }
});
exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite(event => {
    const snapshot = event.data;
    // Only send email for new messages.
    if (snapshot.previous.val() || !snapshot.val().name) {
        return null;
    }

    const val = snapshot.val();

    const mailOptions = {
        to: val.email,
        subject: `Information Request from ${val.gmailEmail}`,
        html: val.html,
        text: `Your message content. \n
          Subject: ${val.subject} \n
          Sender's Name: ${val.name} \n
          Content: ${val.message}`
    };
    return mailTransport.sendMail(mailOptions).then(() =>
    console.log(`New mail confirmation email sent to:`, val.email))
    .catch((error) =>
    console.error('There was an error while sending the email:', error));

    /*mailTransport.sendMail(mailOptions,  function (error,  response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: "  +  response.message);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        mailTransport.close(); // shut down the connection pool, no more messages
    });
}); */ 
//# sourceMappingURL=index.js.map