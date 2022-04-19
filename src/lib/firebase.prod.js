import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCYZ2_P0GxWz2qkOly5UzwM1_cd3UqH49w",
  authDomain: "second-netflix-clone.firebaseapp.com",
  projectId: "second-netflix-clone",
  storageBucket: "second-netflix-clone.appspot.com",
  messagingSenderId: "948234574594",
  appId: "1:948234574594:web:aecbd0c171e21516b8401b",
  measurementId: "G-9B1QLX64P7",
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
