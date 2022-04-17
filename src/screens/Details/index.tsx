import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Layout } from "../../components/Layout";
import { getCredits, getDetails } from "../../hooks/useFetch";
import { COLORS } from "../../theme";
import { Cast, MediaDetails } from "../../types";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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

  const [mediaDetails, setMediaDetails] = useState<MediaDetails>({} as MediaDetails);
  const [cast, setCast] = useState<Cast[]>([]);
  const [loadingDetails, setLoadingDetails] = useState<boolean>(true);

  useEffect(() => {
    setLoadingDetails(true);

    getDetails(type, id).then(response => {
      setMediaDetails(response);

      getCredits(type, id).then(response => {
        setCast(response);
        setLoadingDetails(false);
      });
    });
  }, [id]);

  return (
    <Layout hidden={true}>
      <TouchableOpacity
        style={styles.back}
        activeOpacity={0.75}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="angle-left" size={24} color={COLORS.WHITE} />
        <Text style={styles.back_text}>Voltar</Text>
      </TouchableOpacity>

      {loadingDetails ? <ActivityIndicator size="small" color={COLORS.DARK_SECONDARY} /> : (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${mediaDetails?.backdrop_path}`,
            }}
          />

          <View style={styles.summary}>
            <Image
              style={styles.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${mediaDetails?.poster_path}`
              }}
            />

            <View style={styles.content}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{mediaDetails?.title}</Text>
              <View style={styles.row}>
                <Text style={styles.year}>{new Date(mediaDetails?.release_date).getFullYear()}</Text>

                <View style={styles.average}>
                  <FontAwesome name="star" size={10} color={COLORS.YELLOW} />
                  <Text style={styles.average_text}>{mediaDetails.vote_average}</Text>
                </View>
              </View>

              <View style={styles.genres}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {mediaDetails.genres.map(genre => (
                    <Text style={styles.genre_name} key={genre.id}>{genre.name}</Text>
                  ))}
                </ScrollView>
              </View>

              <Text style={styles.duration}>
                {mediaDetails.type === "movie" ?
                  `${mediaDetails.duration} minutos` :
                  `${mediaDetails.duration} ${mediaDetails.duration < 2 ? "temporada" : "temporadas"}`}
              </Text>
            </View>
          </View>

          <View style={styles.cast}>
            <Text style={styles.cast_header}>Elenco</Text>

            {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {cast.map(person => (
                <Image
                  style={styles.cast_image}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                  }}
                />
              ))}
            </ScrollView> */}

            <FlatList
              horizontal={true}
              data={cast}
              renderItem={({ item }) => <Image
                style={styles.cast_image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                }}
              />}
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{
                marginHorizontal: 6,
              }} />}
            />
          </View>

          <View style={styles.overview}>
            <Text style={styles.overview_header}>Visão geral</Text>
            <Text style={styles.overview_content}>
              {mediaDetails.overview}
            </Text>
          </View>
        </View>
      )}
    </Layout>
  );
}