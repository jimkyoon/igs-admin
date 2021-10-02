import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyAJ-3W2RMpne32nRTGMz8axxOmMiiig9ho",
  authDomain: "igs-test-93ab5.firebaseapp.com",
  projectId: "igs-test-93ab5",
  storageBucket: "igs-test-93ab5.appspot.com",
  messagingSenderId: "1019569110496",
  appId: "1:1019569110496:web:f292e09b6644c9073a3f85",
  measurementId: "G-MEHHVJQFGL",
};

const app = initializeApp(config);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
