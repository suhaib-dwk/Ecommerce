import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDJFJsNwCqfs4jAO1DNiQBekPr5b6ixgVs",
    authDomain: "ecommerce-with-react-a7823.firebaseapp.com",
    projectId: "ecommerce-with-react-a7823",
    storageBucket: "ecommerce-with-react-a7823.appspot.com",
    messagingSenderId: "172334940625",
    appId: "1:172334940625:web:1d2709532b26ec32ee60f0",
    measurementId: "G-J41MGLYX56"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = getStorage();


export { auth, fs, storage }