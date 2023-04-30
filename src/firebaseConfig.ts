import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const config={
    apiKey: "AIzaSyDy3o7gJB62w-sOH_Msnqd0lUTmiw19bDY",
    authDomain: "darwin-botanical-garden.firebaseapp.com",
    databaseURL: "https://darwin-botanical-garden-default-rtdb.firebaseio.com/",
    projectId: "darwin-botanical-garden",
    storageBucket: "darwin-botanical-garden.appspot.com",
    messagingSenderId: "305444237733",
    appId: "1:305444237733:web:cb6a1aabdda83f93fe384c"
  };

  const app = initializeApp(config);
  const db = getFirestore(app);

  const auth = getAuth();


  export async function loginUser(username:string,password:string) {


 const pp = signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      // Signed in 

      const user = userCredential.user;
      // ...

      return true;
     
    })
    .catch((error) => {
    //  const errorCode = error.code;
    //  const errorMessage = error.message;
    //  console.log(error)
      return false;
    });

    return pp

}