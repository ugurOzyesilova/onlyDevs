import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB54B1fDyODj88CmyM1XBhMEuKubKQixYk",
    authDomain: "onlydevs-c47fa.firebaseapp.com",
    projectId: "onlydevs-c47fa",
    storageBucket: "onlydevs-c47fa.appspot.com",
    messagingSenderId: "649725463537",
    appId: "1:649725463537:web:6a1758f6a6f31e577c1250",
    measurementId: "G-Y1YFNC2Y9X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;