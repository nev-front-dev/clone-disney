import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtpVKtwMi6qJcN_nJ0pZB_MPd-F_k-FJs",
  authDomain: "disney-clone-nev.firebaseapp.com",
  projectId: "disney-clone-nev",
  storageBucket: "disney-clone-nev.appspot.com",
  messagingSenderId: "24512587805",
  appId: "1:24512587805:web:5284c8d2c861824bb53ef4",
};

const analytics = getAnalytics(app);

const db = app.firestore();

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  
export {db};