
import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHrgUWceP4RLDMHY87YhH_NvSz7zSp4-U",
  authDomain: "pokedex-3732e.firebaseapp.com",
  projectId: "pokedex-3732e",
  storageBucket: "pokedex-3732e.appspot.com",
  messagingSenderId: "999973817770",
  appId: "1:999973817770:web:5c7fef03937701156b2fd3",
  measurementId: "G-5HBGLDMPKT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {

  try {

    return await signInWithEmailAndPassword(auth, email, password)

  } catch (err) {

    console.error(err)
    alert(err.message)
    return err;

  }


};

export {

  auth,
  logInWithEmailAndPassword

};
