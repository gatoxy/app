import { createContext, ReactNode, RefObject, useContext, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { IHandles } from "react-native-modalize/lib/options";
import { tmdb } from "../services/tmdb";
import { Media } from "../types";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  getUpcoming: (media: "movie" | "tv") => Promise<TMDBResponseProps>;
  getPopular: (media: "movie" | "tv", page: number) => Promise<TMDBResponseProps>;
  onOpenSummary: (media: "movie" | "tv", id: number) => void;
  modalizeRef: RefObject<IHandles>,
  mediaSelected: Media | undefined,
}

interface TMDBResponseProps {
  page: number,
  results: Media[],
  total_pages: number,
  total_results: number;
}

// interface TMDBDetailsResponseProps {

// }

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [mediaSelected, setMediaSelected] = useState<Media>();

  const modalizeRef = useRef<Modalize>(null);

  function onOpenSummary(media: "movie" | "tv", id: number) {
    getDetails(media, id).then(response => {
      setMediaSelected(response);
      modalizeRef.current?.open();
    });
  }

  async function getUpcoming(media: "movie" | "tv") {
    const response = await tmdb.get<TMDBResponseProps>(`/${media}/upcoming?language=pt-BR`);
    return response.data;
  }

  async function getPopular(media: "movie" | "tv", page: number) {
    const response = await tmdb.get<TMDBResponseProps>(`/${media}/popular?language=pt-BR&page=${page}`);
    return response.data;
  }

  async function getDetails(media: "movie" | "tv", id: number) {
    const response = await tmdb.get(`${media}/${id}?language=pt-BR`);

    if(media === "tv") return {
      ...response.data, 
      type: "serie",
      release_date: response.data.first_air_date, 
      title: response.data.name
    }

    return { ...response.data,  type: "movie" };
  }

  return (
    <AppContext.Provider value={{
      getUpcoming, getPopular, onOpenSummary, modalizeRef, mediaSelected,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}