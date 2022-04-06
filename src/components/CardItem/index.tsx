import { Image, TouchableOpacity } from "react-native";
import { useApp } from "../../contexts/AppContext";
import { Media } from "../../types";
import { styles } from "./styles";

interface Props {
  data: any;
  media: "movie" | "serie";
}

interface MovieItemProps {
  data: Media;
}

interface SerieItemProps {
  data: Media;
}

export function CardItem({ data, media }: Props) {
  return media === "movie" ? <MovieItem data={data} /> : <SerieItem data={data} />
}

function MovieItem({ data }: MovieItemProps) {
  const { onOpenSummary } = useApp();

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.80} onPress={() => onOpenSummary("movie", data.id)}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
}

function SerieItem({ data }: SerieItemProps) {
  const { onOpenSummary } = useApp();

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.80} onPress={() => onOpenSummary("tv", data.id)}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
}