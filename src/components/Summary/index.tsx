import { Image, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Modalize } from "react-native-modalize";
import { useApp } from "../../contexts/AppContext";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { GenreType } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { MediaIcon } from "../MediaIcon";
import { Average } from "../Average";

export function Summary() {
  const { modalizeRef, summaryMovie, genres, onCloseSummary } = useApp();

  const navigation = useNavigation();

  let arrayGenres: GenreType[] = [];

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

              <Average vote_average={summaryMovie.vote_average} />

              <MediaIcon type={summaryMovie.type} />
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