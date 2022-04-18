import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Layout } from "../../components/Layout";
import { getDetails, getRecommendations } from "../../hooks/useFetch";
import { MediaType, DetailsType } from "../../types";
import { styles } from "./styles";
import { Carousel } from "../../components/Carousel";
import { DetailsHeader } from "../../components/DetailsHeader";
import { Cast } from "../../components/Cast";
import { Video } from "../../components/Video";
import { Loading } from "../../components/Loading";

interface Props {
  route: {
    params: {
      id: number;
      type: string;
    }
  }
}

export function Details({ route }: Props) {
  const { id, type } = route.params;

  const [details, setDetails] = useState<DetailsType>({} as DetailsType);
  const [recommendations, setRecommendations] = useState<MediaType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getDetails(type, id).then(response => {
      setDetails(response);
      setLoading(false);
    });

    getRecommendations(type, id).then(response => {
      setRecommendations(response.results);
    });
  }, [id]);

  return (
    <Layout showHeader={true}>
      {loading ? <Loading /> : <DetailsHeader data={details} />}
      <Cast type={type} id={id} />
      {loading ? <Loading /> : <Overview overview={details.overview} />}
      <Video type={type} id={id} />
      <Carousel
        title="Filmes similares"
        data={recommendations}
        small={true}
      />
    </Layout>
  );
}

interface OverviewProps {
  overview: string;
}

function Overview({ overview }: OverviewProps) {
  return (
    <View style={styles.overview}>
      <Text style={styles.overview_header}>Visão geral</Text>
      <Text style={styles.overview_content}>
        {overview}
      </Text>
    </View>
  );
}