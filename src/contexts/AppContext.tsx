import { createContext, ReactNode, RefObject, useContext, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { IHandles } from "react-native-modalize/lib/options";
import { tmdb } from "../services/tmdb";
import { TMDBItem } from "../types";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  getUpcoming: (media: "movie" | "tv") => Promise<TMDBResponseProps>;
  getPopular: (media: "movie" | "tv", page: number) => Promise<TMDBResponseProps>;
  search: (media: "movie" | "tv", query: string, page: number) => Promise<TMDBResponseProps>;
  onOpenSummary: (item: TMDBItem) => void;
  modalizeRef: RefObject<IHandles>,
  itemSelected: TMDBItem,
}

interface TMDBResponseProps {
  page: number,
  results: Array<any>,
  total_pages: number,
  total_results: number;
}

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const modalizeRef = useRef<Modalize>(null);

  const [itemSelected, setItemSelected] = useState<TMDBItem>({} as TMDBItem);

  function onOpenSummary(item: TMDBItem) {
    setItemSelected(item);
    modalizeRef.current?.open();
  }

  async function getUpcoming(media: "movie" | "tv") {
    const response = await tmdb.get<TMDBResponseProps>(`/${media}/upcoming?language=pt-BR`);

    const results = response.data.results.map(item => {
      return {
        type: media,
        id: item.id,
        poster_path: item.poster_path,
        backdrop_path: item.backdrop_path,
        overview: item.overview,
        title: item.title || item.name,
        release_date: item.release_date || item.first_air_date,
        vote_average: item.vote_average,
      }
    });

    return {
      page: response.data.page,
      results: results,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
    }
  }

  async function getPopular(media: "movie" | "tv", page: number) {
    const response = await tmdb.get<TMDBResponseProps>(`/${media}/popular?language=pt-BR&page=${page}`);

    const results = response.data.results.map(item => {
      return {
        type: media,
        id: item.id,
        poster_path: item.poster_path,
        backdrop_path: item.backdrop_path,
        overview: item.overview,
        title: item.title || item.name,
        release_date: item.release_date || item.first_air_date,
        vote_average: item.vote_average,
      }
    });

    return {
      page: response.data.page,
      results: results,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
    }
  }

  async function search(media: "movie" | "tv", query: string, page: number) {
    const response = await tmdb.get<TMDBResponseProps>(`/search/${media}?language=pt-BR&query=${query}&page=${page}`);

    const results = response.data.results.map(item => {
      return {
        type: media,
        id: item.id,
        poster_path: item.poster_path,
        backdrop_path: item.backdrop_path,
        overview: item.overview,
        title: item.title || item.name,
        release_date: item.release_date || item.first_air_date,
        vote_average: item.vote_average,
      }
    });

    return {
      page: response.data.page,
      results: results,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
    }
  }

  return (
    <AppContext.Provider value={{
      getUpcoming, getPopular, onOpenSummary, search, modalizeRef, itemSelected,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}