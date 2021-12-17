import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjLVqKvuywxAUmpSjZr6KhicfgpWBKjRY",
  authDomain: "firenext-app-b4df8.firebaseapp.com",
  projectId: "firenext-app-b4df8",
  storageBucket: "firenext-app-b4df8.appspot.com",
  messagingSenderId: "1099275700615",
  appId: "1:1099275700615:web:99e1952916b9d2fc2f6b22",
  measurementId: "G-09Q7QZWJ9Q",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
