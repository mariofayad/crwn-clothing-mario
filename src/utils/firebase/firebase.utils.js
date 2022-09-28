import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Suv8tnXPUtOJ6X7E3pC4YlymDYRFMmU",
  authDomain: "crwn-clothind-db.firebaseapp.com",
  projectId: "crwn-clothind-db",
  storageBucket: "crwn-clothind-db.appspot.com",
  messagingSenderId: "1022152683043",
  appId: "1:1022152683043:web:c12f7f4d1b2c11fa990b96",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  //is user data does not exist
  // create / set the document with the data from userAuth in my collection

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //if user data exists

  return userDocRef;

  //return userDocRef
};
