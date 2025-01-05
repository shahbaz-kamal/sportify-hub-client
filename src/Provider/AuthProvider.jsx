import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // *declaring states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //*   Google sign IN
  const googleProvider = new GoogleAuthProvider();

  const googleSignInUsers = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };

  //   * creating user/register

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   *Sign in with email

  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   *Log Out

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   *On auth state change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setLoading(false);
        setUser(currentUser);
      } else {
        setLoading(false);
        setUser(null);
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);

  //   *update profile
  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    googleSignInUsers,
    registerUser,
    signInWithEmail,
    logOut,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
