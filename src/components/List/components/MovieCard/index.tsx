import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../../../theme";
import { Genre, Movie } from "../../../../types";
import { useApp } from "../../../../contexts/AppContext";

interface Props {
  data: Movie;
}

export function MovieCard({ data }: Props) {
  const { onOpenSummary, genres } = useApp();

  let arrayGenres: Genre[] = [];

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

        <ScrollView
          style={styles.genres}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {arrayGenres.map(genre => (
            <Text style={styles.genre_name} key={genre.id}>{genre.name}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}