import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDjLVqKvuywxAUmpSjZr6KhicfgpWBKjRY",
  authDomain: "firenext-app-b4df8.firebaseapp.com",
  projectId: "firenext-app-b4df8",
  storageBucket: "firenext-app-b4df8.appspot.com",
  messagingSenderId: "1099275700615",
  appId: "1:1099275700615:web:99e1952916b9d2fc2f6b22",
  measurementId: "G-09Q7QZWJ9Q"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
