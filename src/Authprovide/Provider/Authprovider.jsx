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

const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GooglesignIn = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      setloading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const aunthInfo = {
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
  return <AuthContext value={aunthInfo}>{children}</AuthContext>;
};

export default Authprovider;
