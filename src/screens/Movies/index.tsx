import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { CardList } from "../../components/CardList";
import { Layout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";
import { Search } from "../../components/Search";
import { useApp } from "../../contexts/AppContext";
import { TMDBItem } from "../../types";

export function Movies() {
  const { getPopular, search } = useApp();

  const [movies, setMovies] = useState<TMDBItem[]>([]);
  const [title, setTitle] = useState("Filmes recomendados para você");
  const [searchParam, setSearchParam] = useState("");
  const [numberPages, setNumberPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [loading, setLoading] = useState(false);

  function onSearch(query: string) {
    setLoading(true);

    if (query.trim() === "") {
      getPopular("movie", 1).then(response => {
        setCurrentPage(response.page);
        setNumberPages(response.total_pages < 500 ? response.total_pages : 500);
        setMovies(response.results);
        setTitle("Filmes recomendados para você");
        setSearchParam("");
        setLoading(false);
      });

      return;
    }

    search("movie", query, 1).then(response => {
      setSearchParam(query);
      setCurrentPage(response.page);
      setNumberPages(response.total_pages < 500 ? response.total_pages : 500);
      setMovies(response.results);
      setTitle(`${response.total_results} resultados encontrados para "${query}"`);
      setLoading(false);
    });
  }

  function onChangePage(page: number) {
    setLoading(true);

    if (!searchParam) {
      getPopular("movie", page).then(response => {
        setCurrentPage(response.page);
        setMovies(response.results);
        setLoading(false);
      });

      return;
    }

    search("movie", searchParam, page).then(response => {
      setCurrentPage(response.page);
      setMovies(response.results);
      setLoading(false);
    });
  }

  useEffect(() => {
    setLoading(true);

    getPopular("movie", 1).then(response => {
      setCurrentPage(response.page);
      setNumberPages(response.total_pages < 500 ? response.total_pages : 500);
      setMovies(response.results);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Search
        placeholder="Buscar por filmes"
        onSearch={onSearch}
      />

      <CardList
        title={title}
        data={movies}
        display="vertical"
        isLoading={loading}
        currentPage={currentPage}
        numberPages={numberPages}
      />

      {!loading && numberPages > 1 && (
        <Pagination
          numberPages={numberPages}
          currentPage={currentPage}
          onChangePage={onChangePage}
        />
      )}
    </Layout>
  );
}