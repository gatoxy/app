import { createContext, ReactNode, RefObject, useContext, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { IHandles } from "react-native-modalize/lib/options";
import { getGenres } from "../hooks/useFetch";
import { Genre, Movie } from "../types";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  onOpenSummary: (movie: Movie) => void;
  modalizeRef: RefObject<IHandles>;
  summaryMovie: Movie;
  genres: Array<Genre>;
}

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const modalizeRef = useRef<Modalize>(null);

  const [summaryMovie, setSummaryMovie] = useState<Movie>({} as Movie);
  const [genres, setGenres] = useState<Genre[]>([]);

  function onOpenSummary(movie: Movie) {
    setSummaryMovie(movie);
    modalizeRef.current?.open();
  }

  useEffect(() => {
    getGenres().then(response => {
      setGenres(response.genres);
    })
  }, []);

  return (
    <AppContext.Provider value={{
      onOpenSummary, modalizeRef, summaryMovie, genres
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}