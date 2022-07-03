import { initializeApp } from '@firebase/app';
import { getAnalytics } from '@firebase/analytics';
import { getRemoteConfig, fetchAndActivate } from "@firebase/remote-config";

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
export const remoteConfig = getRemoteConfig(app);

remoteConfig.settings.minimumFetchIntervalMillis = 21600000;
remoteConfig.defaultConfig = {
    // "free_time_desc": `In my free time, you can usually find me on the golf course, 
    //     playing tactical board games / TCGs such as 7 Wonders and Magic: The Gathering, 
    //     or critically enjoying a movie.`,
    // "technical_desc": `While I've only just starting my journey as a developer, 
    //     my favorite technologies to work with thus far have been serverless backend services 
    //     like Firebase and Google Cloud Runs. In my current internship with Data Science for Sustainable Development, 
    //     I've had the opportunity to build and deploy a Apollo Server GraphQL API that uses an ORM to interact with a 
    //     normalized PostgreSQL database. I've learned so much already, and I'm excited to learn so much more!`,
    // "who_am_i": `My name is Jack Blake. I'm a rising sophomore at University of Wisconsin majoring in computer science. 
    //     I'm planning on a career path that uses technology to have a positive impact on the world, 
    //     especially with projects related to health or the environment.`
    "free_time_desc": 'default',
    "technical_desc": 'default',
    "who_am_i": 'default'
};