import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    // create an observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user),
    );

    //clean up
    return unSubscribe;
  }, []);

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithCredential = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).then(result=>{
      localStorage.setItem("name", result.user.displayName);
      localStorage.setItem("email", result.user.email);
      localStorage.setItem("profilePicture", result.user.photoURL);
    })
  };

  const logOut = async ()=>{
    await signOut(auth)
  }

  const value = {
    currentUser,
    signUp,
    signInWithCredential,
    signInWithGoogle,
    logOut
  };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}

export default AuthContextProvider