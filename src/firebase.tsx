import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  Auth,
} from "firebase/auth";

// Firebase configuration object with appropriate type
const firebaseConfig: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
} = {
  apiKey: "AIzaSyDm9R-hwprOQ99HlMVZM-zX5lvl0Tw5AWM",
  authDomain: "mango-79490.firebaseapp.com",
  projectId: "mango-79490",
  storageBucket: "mango-79490.appspot.com",
  messagingSenderId: "730931845864",
  appId: "1:730931845864:web:a3a1f8f67f47064f81c75d",
  measurementId: "G-F78WEFQWVL",
};

// Initialize Firebase app
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase authentication
const auth: Auth = getAuth(app);

// Providers for authentication
const provider: GoogleAuthProvider = new GoogleAuthProvider();
const facebookProvider: FacebookAuthProvider = new FacebookAuthProvider();
const appleProvider: OAuthProvider = new OAuthProvider("apple.com");

export { auth, provider, facebookProvider, appleProvider };
