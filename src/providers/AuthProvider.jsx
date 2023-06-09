import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// initialize firebase authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign up new users
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in existing users
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out a user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // get the currently signed-in user
  // observer auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      // get and set token
      if (currentUser) {
        axios
          .post(
            "https://bistro-boss-server-side-masumbillah99.vercel.app/jwt",
            { email: currentUser.email }
          )
          .then((data) => {
            // console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // update user data
  const updateUserProfile = (authUser, name, photoUrl) => {
    return updateProfile(authUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // update user's email address
  const updateUserEmail = (authUser, email) => {
    return updateEmail(authUser, email);
  };

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    logOutUser,
    updateUserProfile,
    updateUserEmail,
    googleSignIn,
    resetPassword,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
