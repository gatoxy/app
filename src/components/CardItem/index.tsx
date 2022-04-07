import { Image, Text, TouchableOpacity, View } from "react-native";
import { useApp } from "../../contexts/AppContext";
import { TMDBItem } from "../../types";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../theme";

interface Props {
  data: TMDBItem;
  display?: "vertical" | "horizontal"
}

export function CardItem({ data, display }: Props) {
  const { onOpenSummary } = useApp();

  if (display === "vertical") {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.80} onPress={() => onOpenSummary(data)}>
        <View style={styles.row}>
          <Image
            style={styles.backdropImage}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`,
            }}
          />

          <View style={styles.summary}>
            <Text style={styles.summaryTitle} numberOfLines={1} ellipsizeMode="tail">{data.title}</Text>
            <View style={styles.summaryBody}>
              <Text style={styles.year}>{new Date(data.release_date).getFullYear()}</Text>
              <Text style={styles.media}>{data.type === "movie" ? <MaterialCommunityIcons name="filmstrip" size={12} color={COLORS.GRAY} /> : <Ionicons name="tv" size={12} color={COLORS.GRAY} />}</Text>
              <Text style={styles.average}>{data.vote_average}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.bookmarkButton} activeOpacity={0.70}>
          <Feather name="bookmark" size={20} color={COLORS.GRAY} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.80} onPress={() => onOpenSummary(data)}>
      <Image
        style={styles.posterImage}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
}