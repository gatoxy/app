import { useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
import { Layout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";
import { Search } from "../../components/Search";
import { useApp } from "../../contexts/AppContext";
import { TMDBItem } from "../../types";

export function Series() {
  const { getPopular, search } = useApp();

  const [series, setSeries] = useState<TMDBItem[]>([]);
  const [title, setTitle] = useState("Séries recomendados para você");
  const [searchParam, setSearchParam] = useState("");
  const [numberPages, setNumberPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [loading, setLoading] = useState(false);

  function onSearch(query: string) {
    setLoading(true);

    if (query.trim() === "") {
      getPopular("tv", 1).then(response => {
        setCurrentPage(response.page);
        setNumberPages(response.total_pages < 500 ? response.total_pages : 500);
        setSeries(response.results);
        setTitle("Séries recomendados para você");
        setSearchParam("");
        setLoading(false);
      });

      return;
    }

    search("tv", query, 1).then(response => {
      setSearchParam(query);
      setCurrentPage(response.page);
      setNumberPages(response.total_pages < 500 ? response.total_pages : 500);
      setSeries(response.results);
      setTitle(`${response.total_results} resultados encontrados para "${query}"`);
      setLoading(false);
    });
  }

  function onChangePage(page: number) {
    setLoading(true);

    if (!searchParam) {
      getPopular("tv", page).then(response => {
        setCurrentPage(response.page);
        setSeries(response.results);
        setLoading(false);
      });

      return;
    }

    search("tv", searchParam, page).then(response => {
      setCurrentPage(response.page);
      setSeries(response.results);
      setLoading(false);
    });
  }

  useEffect(() => {
    setLoading(true);

    getPopular("tv", 1).then(response => {
      setCurrentPage(response.page);
      setNumberPages(response.total_pages < 500 ? response.total_pages : 500);
      setSeries(response.results);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Search
        placeholder="Buscar por séries"
        onSearch={onSearch}
      />

      <CardList
        title={title}
        data={series}
        display="vertical"
        isLoading={loading}
        showHowManyPages={true}
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