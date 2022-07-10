import { initializeApp } from '@firebase/app';
import { getAnalytics, setAnalyticsCollectionEnabled } from '@firebase/analytics';
import { getFunctions, connectFunctionsEmulator } from '@firebase/functions'
import { initializeAppCheck, ReCaptchaV3Provider } from '@firebase/app-check'

const firebaseConfig = {
    apiKey: "AIzaSyDQu5Bn4xKitLGMnQqwRqlJ7ES7aa6u1WI",
    authDomain: "personalwebpage-91658.firebaseapp.com",
    projectId: "personalwebpage-91658",
    storageBucket: "personalwebpage-91658.appspot.com",
    messagingSenderId: "476256606132",
    appId: "1:476256606132:web:0979cd8d450ed9d0a544e1",
    measurementId: "G-T6QLCH934V"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const functions = getFunctions(app);

if(!isProduction) {
    connectFunctionsEmulator(functions, 'localhost', 5001);
    setAnalyticsCollectionEnabled(analytics, false);
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6Lc9utogAAAAAKbipqc3K52iSvpJV4273m0XWQT-'),
    isTokenAutoRefreshEnabled: true
});