import React, { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { AuthContext } from "../Context/Context";

const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  console.log(user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      setloading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const googleProvider = new GoogleAuthProvider();

  const GooglesignIn = () => {
    signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  const Authdata = {
    updateUser,
    createUser,
    user,
    setuser,
    logout,
    signIn,
    setloading,
    GooglesignIn,
    loading,
  };
  return <AuthContext value={Authdata}>{children}</AuthContext>;
};

export default Authprovider;
