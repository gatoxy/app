import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../services/firebase";

interface AuthContextData {
  signInWithGoogle: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type User = {
  id: string;
  name: any; // string
  email: any; // string
  avatar: any; // string
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    alert("OK");
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;

        setUser({
          id: uid,
          name: displayName,
          email: email,
          avatar: photoURL,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      signInWithGoogle,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}