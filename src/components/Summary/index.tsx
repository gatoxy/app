import { Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Modalize } from "react-native-modalize";
import { useApp } from "../../contexts/AppContext";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { FontAwesome } from "@expo/vector-icons";
import { Genre } from "../../types";
import { useNavigation } from "@react-navigation/native";

export function Summary() {
  const { modalizeRef, summaryMovie, genres, onCloseSummary } = useApp();

  const navigation = useNavigation();

  let arrayGenres: Genre[] = [];

  summaryMovie.genre_ids?.map(genreId => {
    const find = genres.find(genre => genre.id === genreId);

    if (find) {
      arrayGenres.push(find);
    }
  });

  function navigateToDetails() {
    onCloseSummary();

    navigation.navigate("Details", {
      id: summaryMovie.id,
      type: summaryMovie.type,
    })
  }

  return (
    <Modalize ref={modalizeRef} snapPoint={218} modalStyle={styles.modal}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${summaryMovie.poster_path}`
            }}
          />

          <View style={styles.content}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{summaryMovie.title}</Text>
            <View style={styles.row}>
              <Text style={styles.year}>{new Date(summaryMovie.release_date).getFullYear()}</Text>

              <View style={styles.average}>
                <FontAwesome name="star" size={10} color={COLORS.YELLOW} />
                <Text style={styles.average_text}>{summaryMovie.vote_average}</Text>
              </View>

              {summaryMovie.type === "movie" ? (
                <View style={styles.media}>
                  <Ionicons name="film-outline" size={10} color={COLORS.WHITE} />
                  <Text style={styles.media_text}>Filme</Text>
                </View>
              ) : (
                <View style={styles.media}>
                  <Ionicons name="ios-tv-outline" size={10} color={COLORS.WHITE} />
                  <Text style={styles.media_text}>Série</Text>
                </View>
              )}
            </View>

            <View style={styles.genres}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {arrayGenres.map(genre => (
                  <Text style={styles.genre_name} key={genre.id}>{genre.name}</Text>
                ))}
              </ScrollView>
            </View>

            <Text style={styles.description} numberOfLines={4} ellipsizeMode="tail">{summaryMovie.overview}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.75} onPress={navigateToDetails}>
          <Ionicons name="information-circle-outline" size={20} color={COLORS.WHITE} />
          <Text style={styles.button_text}>Ver mais informações</Text>
        </TouchableOpacity>
      </View>
    </Modalize>
  );
}