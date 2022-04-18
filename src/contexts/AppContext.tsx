import { createContext, ReactNode, RefObject, useContext, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { IHandles } from "react-native-modalize/lib/options";
import { getGenres } from "../hooks/useFetch";
import { GenreType, MediaType } from "../types";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  onOpenSummary: (movie: MediaType) => void;
  onCloseSummary: () => void;
  modalizeRef: RefObject<IHandles>;
  mediaOnSummary: MediaType;
  genres: Array<GenreType>;
}

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const modalizeRef = useRef<Modalize>(null);

  const [mediaOnSummary, setMediaOnSummary] = useState<MediaType>({} as MediaType);
  const [genres, setGenres] = useState<GenreType[]>([]);

  function onOpenSummary(movie: MediaType) {
    setMediaOnSummary(movie);
    modalizeRef.current?.open();
  }

  function onCloseSummary() {
    modalizeRef.current?.close();
  }

  useEffect(() => {
    getGenres().then(response => {
      setGenres(response.genres);
    })
  }, []);

  return (
    <AppContext.Provider value={{
      onOpenSummary, onCloseSummary, modalizeRef, mediaOnSummary, genres
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}