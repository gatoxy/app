import { CardList } from "../../components/CardList";
import { Layout } from "../../components/Layout";

export function Home() {
  return (
    <Layout>
      <CardList title="Recomendados para você" />
      <CardList title="Filmes populares" />
      <CardList title="Séries populares" />
    </Layout>
  );
}