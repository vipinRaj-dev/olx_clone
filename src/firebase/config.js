import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBAInjbZWJmrQLTpa0KuCnhrarmqSDGqq4",
    authDomain: "fir-f7839.firebaseapp.com",
    projectId: "fir-f7839",
    storageBucket: "fir-f7839.appspot.com",
    messagingSenderId: "866022429227",
    appId: "1:866022429227:web:07ae6c37fda1abb2d7d06e",
    measurementId: "G-CK95WN9762"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  
  export { db, auth , firestore };