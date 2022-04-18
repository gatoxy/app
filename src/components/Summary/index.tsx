import { Image, Text, View, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import { useApp } from "../../contexts/AppContext";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { GenreType } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { MediaIcon } from "../MediaIcon";
import { Average } from "../Average";
import { Genres } from "../Genres";

import DefaultImage from "../../assets/poster-default.png";
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

export function Summary() {
  const { modalizeRef, mediaOnSummary, genres, onCloseSummary } = useApp();

  const navigation = useNavigation();

  let arrayGenres: GenreType[] = [];

  mediaOnSummary.genre_ids?.map(genreId => {
    const find = genres.find(genre => genre.id === genreId);

    if (find) {
      arrayGenres.push(find);
    }
  });

  function navigateToDetails() {
    const myPromise = new Promise((resolve, reject) => {
      resolve(onCloseSummary());
    });

    myPromise.then(() => {
      navigation.navigate("Details", {
        id: mediaOnSummary.id,
        type: mediaOnSummary.type,
      });
    });
  }

  return (
    <Modalize ref={modalizeRef} snapPoint={218} modalStyle={styles.modal}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Image
            style={styles.image}
            source={{
              uri: mediaOnSummary.poster_path ? `https://image.tmdb.org/t/p/w500/${mediaOnSummary.poster_path}` : DEFAULT_IMAGE,
            }}
          />

          <View style={styles.content}>
            <View style={styles.content_header}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{mediaOnSummary.title}</Text>

              <TouchableOpacity activeOpacity={0.75} style={styles.close} onPress={onCloseSummary}>
                <Ionicons name="close" size={16} color={COLORS.WHITE} />
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Text style={styles.year}>{new Date(mediaOnSummary.release_date).getFullYear()}</Text>
              <Average vote_average={mediaOnSummary.vote_average} />
              <MediaIcon type={mediaOnSummary.type} />
            </View>

            <Genres data={arrayGenres} />

            <Text style={styles.description} numberOfLines={4} ellipsizeMode="tail">{mediaOnSummary.overview}</Text>
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