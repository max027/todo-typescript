import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext({});

export const useAuthContext = () => useContext<any>(AuthContext);

interface Children {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Children) => {
  const [loading, isloading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      isloading(false);
    });
    return () => unsubscribe();
  }, []);

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout=async()=>{
      setUser(null)
      await signOut(auth)
    }
  return (
    <AuthContext.Provider value={{ user, register, login ,logout}}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
