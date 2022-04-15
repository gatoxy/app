import { createContext, ReactNode, useContext } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {

}

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  
  return (
    <AppContext.Provider value={{

    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}