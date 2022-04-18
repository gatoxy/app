import { createContext, ReactNode, RefObject, useContext, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { IHandles } from "react-native-modalize/lib/options";
import { getGenres } from "../hooks/useFetch";
import { Genre, Media } from "../types";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  onOpenSummary: (movie: Media) => void;
  onCloseSummary: () => void;
  modalizeRef: RefObject<IHandles>;
  summaryMovie: Media;
  genres: Array<Genre>;
}

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const modalizeRef = useRef<Modalize>(null);

  const [summaryMovie, setSummaryMovie] = useState<Media>({} as Media);
  const [genres, setGenres] = useState<Genre[]>([]);

  function onOpenSummary(movie: Media) {
    setSummaryMovie(movie);
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
      onOpenSummary, onCloseSummary, modalizeRef, summaryMovie, genres
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}