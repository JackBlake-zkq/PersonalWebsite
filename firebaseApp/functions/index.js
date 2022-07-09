if(process.env['NODE_ENV'] != 'production') require('dotenv').config()
const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const emailvalidator = require("email-validator");

exports.emailMe = functions.https.onCall( async (data, context) => {
    if(!(typeof data.name == 'string' && typeof data.email == 'string' && typeof data.msg == 'string'))
        throw new functions.https.HttpsError('invalid-argument', 'name, email, and msg must be strings!');
    if(!data.name) throw new functions.https.HttpsError('invalid-argument', 'Name cannot be empty!');
    if(!emailvalidator.validate(data.email)) throw new functions.https.HttpsError('invalid-argument', 'Invalid email!');
    if(!data.msg) throw new functions.https.HttpsError('invalid-argument', 'Message cannot be empty!');
    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        });
        await transport.sendMail({
            from: `"jblake.dev" <${process.env.EMAIL}>`,
            to: process.env.SEND_TO_EMAIL,
            cc: data.email,
            subject: `Message from "${data.name}" <${data.email}>`,
            text: data.msg,
        })
        return true;
    } catch(err) {
        throw new functions.https.HttpsError("internal", 'Failed to send email: ' + err);
    }
})
