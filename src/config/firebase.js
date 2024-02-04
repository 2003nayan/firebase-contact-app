// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeWvE7Ot6f-CwqihHFIKMhDCmp38Zo0Jo",
    authDomain: "nk-vite-contact.firebaseapp.com",
    projectId: "nk-vite-contact",
    storageBucket: "nk-vite-contact.appspot.com",
    messagingSenderId: "288346264308",
    appId: "1:288346264308:web:7aaa8abf56ac9cba68c4a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);