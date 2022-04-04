import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { tmdb } from "../services/tmdb";
import { Movie, Serie } from "../types";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  upcoming: (media: string) => Promise<Movie[]>;
  popular: (media: string, page: number) => Promise<any>;
  onOpenSummary: (id: number, media: string) => void;
  modalizeRef: any,
  mediaSelected: Movie | Serie | undefined,
}

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [mediaSelected, setMediaSelected] = useState<Movie | Serie>();

  const modalizeRef = useRef<Modalize>(null);

  function onOpenSummary(id: number, media: string) {
    details(media, id).then(response => {
      setMediaSelected(response);
      modalizeRef.current?.open();
    })
  }

  async function upcoming(media: string) {
    const { data } = await tmdb.get(`/${media}/upcoming?language=pt-BR`);
    return data.results;
  }

  async function popular(media: string, page: number) {
    const { data } = await tmdb.get(`/${media}/popular?language=pt-BR&page=${page}`);
    return data;
  }

  async function details(media: string, id: number) {
    const { data } = await tmdb.get(`${media}/${id}?language=pt-BR`);
    return data;
  }

  return (
    <AppContext.Provider value={{
      upcoming, popular, onOpenSummary, modalizeRef, mediaSelected,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}