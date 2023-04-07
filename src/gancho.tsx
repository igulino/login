import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA04vEBnA7gzy0gZk4gOLJxqZ90puv_Viw",
  authDomain: "proj-dt.firebaseapp.com",
  projectId: "proj-dt",
  storageBucket: "proj-dt.appspot.com",
  messagingSenderId: "258724012751",
  appId: "1:258724012751:web:fa1bb29b05b4f8dedd0dba",
  measurementId: "G-KJ92PN4LH7"
};

const app = initializeApp(firebaseConfig);
export const dt = getDatabase(app)
export const provider = new GoogleAuthProvider()