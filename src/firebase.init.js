import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // apiKey: "AIzaSyDZkw6HheMBQJMH-6DtkBgSJkDxJRrVR0M",
    // authDomain: "assigment-10-ce427.firebaseapp.com",
    // projectId: "assigment-10-ce427",
    // storageBucket: "assigment-10-ce427.appspot.com",
    // messagingSenderId: "539430732781",
    // appId: "1:539430732781:web:a9b7b0a64f06292bb49de4"
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth