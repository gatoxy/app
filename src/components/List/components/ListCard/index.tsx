import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../../../theme";
import { GenreType, MediaType } from "../../../../types";
import { useApp } from "../../../../contexts/AppContext";
import { Genres } from "../../../Genres";

interface Props {
  data: MediaType;
}

export function ListCard({ data }: Props) {
  const { onOpenSummary, genres } = useApp();

  let arrayGenres: GenreType[] = [];

  data.genre_ids.map(genreId => {
    const find = genres.find(genre => genre.id === genreId);

    if (find) {
      arrayGenres.push(find);
    }
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => onOpenSummary(data)}
      >
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
          }}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{data.title}</Text>

        <View style={styles.row}>
          <Text style={styles.year}>{new Date(data.release_date).getFullYear()}</Text>

          <View style={styles.average}>
            <FontAwesome name="star" size={10} color={COLORS.YELLOW} />
            <Text style={styles.average_text}>{data.vote_average}</Text>
          </View>
        </View>

        <Genres data={arrayGenres} limit={2} />
      </View>
    </View>
  );
}