import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { List } from "../../components/List";
import { Pagination } from "../../components/Pagination";
import { Search } from "../../components/Search";
import { getPopular, search } from "../../hooks/useFetch";
import { MediaType } from "../../types";

export function Movies() {
  const [movies, setMovies] = useState<MediaType[]>([]);
  const [title, setTitle] = useState("Filmes recomendados para você");
  const [searchParam, setSearchParam] = useState("");
  const [numberPages, setNumberPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  function onSearch(query: string) {
    setLoading(true);

    if (query.trim() === "") {
      getPopular("movie").then(response => {
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

    getPopular("movie").then(response => {
      setCurrentPage(response.page);
      setNumberPages(response.total_pages < 500 ? response.total_pages : 500);
      setMovies(response.results);
      setLoading(false);
    });
  }, []);

  return (
    <Layout showHeader={true}>
      <Search
        placeholder="Pesquisar por filmes"
        onSearch={onSearch}
      />

      <List
        data={movies}
        title={title}
        loading={loading}
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