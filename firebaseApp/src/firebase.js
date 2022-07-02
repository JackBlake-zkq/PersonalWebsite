import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    projectId: "personalwebpage-91658",
}

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);