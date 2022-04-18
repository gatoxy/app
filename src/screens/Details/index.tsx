import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { Layout } from "../../components/Layout";
import { getDetails, getRecommendations } from "../../hooks/useFetch";
import { COLORS } from "../../theme";
import { MediaType, DetailsType } from "../../types";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Carousel } from "../../components/Carousel";


import { DetailsHeader } from "../../components/DetailsHeader";
import { Cast } from "../../components/Cast";
import { Video } from "../../components/Video";
import { BackButton } from "../../components/BackButton";

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

  const navigation = useNavigation();

  const [details, setDetails] = useState<DetailsType>({} as DetailsType);
  const [recommendations, setRecommendations] = useState<MediaType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getDetails(type, id).then(response => {
      setDetails(response);
      setLoading(false);
    });
  }, [id]);

  return (
    <Layout hidden={true}>
      <BackButton />
      <DetailsHeader data={details} />
      <Cast type={type} id={id} />
      <Overview overview={details.overview} />
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