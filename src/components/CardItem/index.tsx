import { Image, TouchableOpacity } from "react-native";
import { useApp } from "../../contexts/AppContext";
import { Movie, Serie } from "../../types";
import { styles } from "./styles";

interface Props {
  data: any;
  media: "movie" | "serie";
}

interface MovieItemProps {
  data: Movie;
}

interface SerieItemProps {
  data: Serie;
}

export function CardItem({ data, media }: Props) {
  return media === "movie" ? <MovieItem data={data} /> : <SerieItem data={data} />
}

function MovieItem({ data }: MovieItemProps) {
  const { onOpenSummary } = useApp();

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.80} onPress={() => onOpenSummary(data.id, "movie")}>
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
    <TouchableOpacity style={styles.container} activeOpacity={0.80} onPress={() => onOpenSummary(data.id, "tv")}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
}