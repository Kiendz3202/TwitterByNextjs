import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAWzdATbn0kf2o5QeMZumtCqd-doe6GMSw",
    authDomain: "twitter-demo-a029c.firebaseapp.com",
    projectId: "twitter-demo-a029c",
    storageBucket: "twitter-demo-a029c.appspot.com",
    messagingSenderId: "552412625688",
    appId: "1:552412625688:web:9b5a14cb5d44e2bbfcbc6d"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };