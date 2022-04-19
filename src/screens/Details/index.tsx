import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Layout } from "../../components/Layout";
import { getCredits, getDetails, getRecommendations, getVideos } from "../../hooks/useFetch";
import { MediaType, DetailsType, VideoType, CastType } from "../../types";
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
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [cast, setCast] = useState<CastType[]>([]);
  const [recommendations, setRecommendations] = useState<MediaType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initialLoad() {
      setLoading(true);

      const detailsResponse = await getDetails(type, id);
      const castResponse = await getCredits(type, id);
      const recommendationsResponse = await getRecommendations(type, id);
      const videosResponse = await getVideos(type, id);

      setDetails(detailsResponse);
      setCast(castResponse);
      setRecommendations(recommendationsResponse.results);
      setVideos(videosResponse);

      setLoading(false);
    }

    initialLoad();
  }, [id]);

  return (
    <Layout showHeader={true}>
      {loading ? (
        <View style={{
          height: 150,
          justifyContent: "center",
        }}>
          <Loading />
        </View>
      ) : (
        <View>
          <DetailsHeader data={details} />
          <Cast data={cast} />
          <Overview overview={details.overview} />
          <Video data={videos} />
          {recommendations.length > 0 && (
            <Carousel
              title="Recomendados"
              data={recommendations}
              small={true}
            />
          )}
        </View>
      )}
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