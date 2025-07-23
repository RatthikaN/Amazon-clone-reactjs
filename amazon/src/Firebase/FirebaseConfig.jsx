import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import  {getFirestore}  from "firebase/firestore";
 import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf_nmwR6lDoPkPBJIuaxvIVNwuDJ_19u8",
  authDomain: "clone-cf2ff.firebaseapp.com",
  projectId: "clone-cf2ff",
  storageBucket: "clone-cf2ff.firebasestorage.app",
  messagingSenderId: "306795797442",
  appId: "1:306795797442:web:26f09ef7de3aa11b7c945b",
  measurementId: "G-GFG48213LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const fireDB = getFirestore(app);
 const auth = getAuth(app);

export { fireDB, auth };
