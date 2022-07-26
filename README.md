# PersonalWebsite
This a small Svelte project setup as a Firebase app. It's a single page app that uses vanilla CSS for styling, 
and the [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router) package for routing. Firebase is used for analytics, 
a cloud function for sending emails, App Check to guard the cloud function, and Remote Config as a lightweight, makeshift CMS.

Pull request and merges into main will be deployed to firebase hosting, and live on jblake.dev within an hour after.

To run the project locally, from "firebaseApp", run:

```bash
npm run dev
```

AND in another terminal window:

```bash
firebase emulators:start
```

The emulators will start the hosting and functions emulators. While running in development,
the app is configured to (using rollup's [replace pugin](https://www.npmjs.com/package/@rollup/plugin-replace)) use the functions emulator, disable analytics collection, 
and use a browser generated debug token for App Check. These debug tokens will not be functional unless they are registered
on the firebase project by an administrator. To run in development without requiring App Check, comment out this line in "firebaseApp/functions/index.js":

```javascript
exports.emailMe = functions.runWith({
    //allowInvalidAppCheckToken: false
}).https.onCall( async (data, context) => {
```

The email cloud function uses [Nodemailer](https://nodemailer.com/usage/) with an [ethereal email](https://ethereal.email/) 
(visit this link and make an account) in development, which allows for previewing emails that 
would be sent without actually sending them. For this to work, three environment variable must be set in a ".env" file
inside the "functions" directory, to be loaded in by the [dotenv](https://www.npmjs.com/package/dotenv) package. They are:

```
SEND_TO_EMAIL=EmailThatEtherealEmailWillSimulateSendingTo
ETHEREAL_EMAIL=YourEtherealEmailHere
ETHEREAL_EMAIL_PASS=YourEtherialPasswordHere
```
