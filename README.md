# Personal Website
This a small [Svelte](https://svelte.dev/) project setup as a [Firebase](https://firebase.google.com/) app. It's a single page app that uses vanilla CSS for styling, and the [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router) package for routing. Firebase is used for [Analytics](https://firebase.google.com/docs/analytics), a [Cloud Function](https://firebase.google.com/docs/functions) for sending emails, and [App Check](https://firebase.google.com/docs/app-check) to guard the Cloud Function from abuse.

## Development

To run the project locally, from "firebaseApp", run:

```bash
npm run dev
```

This will cause [rollup](https://rollupjs.org/guide/en/) to build the svelte into vanilla js, then the Firebase functions and hosting emulators
to start. The application will be accesible locally at port 5002 by default (or will fail if that port is not available), but this can be modified in firebase.json


To intead serve the project and reflect changes upon saving, in "firebaseApp", run:

```bash
npm run serve
```

By default, serving will use port 8080, but if that port is taken, rollup will find a new one automatically.

Rollup is configured to, using [replace pugin](https://www.npmjs.com/package/@rollup/plugin-replace), replace any references in javascript to "isProduction" with the value true or false at build time. If this value is false, the Firebase app uses the functions emulator, disables analytics collection, and uses a browser generated [debug token](https://firebase.google.com/docs/app-check/web/debug-provider#:~:text=do%20the%20following%3A-,In%20the%20App%20Check%20section%20of%20the%20Firebase%20console%2C%20choose,that%20you%20keep%20it%20private.) for App Check. These debug tokens will not be functional unless they are registered on the firebase project. To run in development without requiring App Check, comment out this line in "firebaseApp/functions/index.js":

```javascript
exports.emailMe = functions.runWith({
    //allowInvalidAppCheckToken: false
}).https.onCall( async (data, context) => {
```

The email cloud function uses [Nodemailer](https://nodemailer.com/usage/) with an [ethereal email](https://ethereal.email/) 
(visit the link and make an account) in development, which allows for previewing emails that 
would be sent without actually sending them. For this to work, three environment variable must be set in a ".env" file
inside the "functions" directory, to be loaded in by the [dotenv](https://www.npmjs.com/package/dotenv) package. They are:

```
SEND_TO_EMAIL=EmailThatEtherealEmailWillSimulateSendingTo
ETHEREAL_EMAIL=YourEtherealEmailHere
ETHEREAL_EMAIL_PASS=YourEtherialPasswordHere
```

## Production

Pull request and merges into main will be automatically built deployed to firebase hosting, and live on jblake.dev within an hour after.

To deploy functions, first add the following environment variables to the ".env" file inside "functions":

```
EMAIL=YourZohoMailEmail
EMAIL_PASS=YourZohoMailPassword
```

These should be valid credentials to a [ZohoMail](https://www.zoho.com/mail/) account, preferably using an [App Password](https://help.zoho.com/portal/en/kb/bigin/channels/email/articles/generate-an-app-specific-password#To_generate_app_specific_password_for_Zoho_Mail). The email cloud function will this account
to send emails to users when they fill out the contact form.

Once that is done, functions are ready to be deployed! In the "functions" directory, simply run:

```bash
npm run deploy
```
