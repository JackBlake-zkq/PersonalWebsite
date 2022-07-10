const prod = process.env['NODE_ENV'] == 'production';
console.log(prod);
if(!prod) require('dotenv').config()
const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const emailvalidator = require("email-validator");

exports.emailMe = functions.runWith({
    allowInvalidAppCheckToken: false
}).https.onCall( async (data, context) => {

    if (prod && context.app == undefined)
        throw new functions.https.HttpsError('failed-precondition', 'The function must be called from an App Check verified app.');

    if(!(typeof data.name == 'string' && typeof data.email == 'string' && typeof data.msg == 'string'))
        throw new functions.https.HttpsError('invalid-argument', 'name, email, and msg must be strings!');
    if(!data.name) throw new functions.https.HttpsError('invalid-argument', 'Name cannot be empty!');
    if(!emailvalidator.validate(data.email)) throw new functions.https.HttpsError('invalid-argument', 'Invalid email!');
    if(!data.msg) throw new functions.https.HttpsError('invalid-argument', 'Message cannot be empty!');
    try {
        let mailConfig;
        if(prod) {
            mailConfig = {
                host: 'smtp.zoho.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASS
                }
            };
        } else {
            mailConfig = {
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false, 
                auth: {
                    user: process.env.ETHEREAL_EMAIL, 
                    pass: process.env.ETHEREAL_EMAIL_PASS
                }
            };
        }
        const transport = nodemailer.createTransport(mailConfig);

        const info = await transport.sendMail({
            from: `"jblake.dev" <${process.env.EMAIL}>`,
            to: process.env.SEND_TO_EMAIL,
            cc: data.email,
            subject: `Message from "${data.name}" <${data.email}>`,
            text: data.msg,
        })
        if(!prod) console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
        return true;
    } catch(err) {
        throw new functions.https.HttpsError("internal", 'Failed to send email: ' + err);
    }
})
