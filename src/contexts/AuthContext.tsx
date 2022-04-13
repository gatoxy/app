import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { GCP_CLIENT_ID, GCP_REDIRECT_URI } from "@env";

import * as AuthSession from "expo-auth-session";

interface AuthContextData {
  signInWithGoogle: () => Promise<void>;
  user: UserProps | undefined,
}

interface AuthProviderProps {
  children: ReactNode;
}

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  };
}

type UserProps = {
  email: string;
  name: string;
  picture: string;
  id: string;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | undefined>();

  async function signInWithGoogle() {
    try {
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";
      
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GCP_CLIENT_ID}&redirect_uri=${GCP_REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

      if(type === "success") {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const user = await response.json();
        
        setUser({
          email: user.email,
          id: user.id,
          name: user.given_name,
          picture: user.picture,
        });
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{
      signInWithGoogle, user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}