
// import { FirebaseError } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    }).catch((error) => {
       const errorCode = error.code;
         const errorMessage = error.message;
        console.error(error);
        console.error(errorMessage);
        console.error(errorCode);
    });