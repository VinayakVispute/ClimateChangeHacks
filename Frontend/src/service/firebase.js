// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendSignInLinkToEmail,
  signOut,
} from "firebase/auth";
import { useAuth } from "../context/AuthContext";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmT-7vQGO8TKvM3Tqrvd8cTuHYqdKxdZ4",
  authDomain: "ecofootprint-379f5.firebaseapp.com",
  projectId: "ecofootprint-379f5",
  storageBucket: "ecofootprint-379f5.appspot.com",
  messagingSenderId: "669584061017",
  appId: "1:669584061017:web:2a5715576b143c275bf748",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const signInWithEmailAndPasswordAuth = () => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);

      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });
};

export const getCurrentUser = () => {
  const user = auth.currentUser;
  return user;
};

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  // url: "http://localhost:5173/",
  url: "http://localhost:5173/",
  handleCodeInApp: true,
};

export const sendSignInLinkToEmailAuth = (email) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.

      localStorage.setItem("emailForSignIn", email);
      alert("We have sent you a link to your email");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);

      // ...
    });
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("Sign out successful");
      return true;
    })
    .catch((error) => {
      console.log(error.message);
      return false;
    });
};
